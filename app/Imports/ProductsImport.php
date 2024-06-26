<?php

namespace App\Imports;

use App\Models\Product;
use App\Models\Restock;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ProductsImport implements ToCollection,WithStartRow,WithValidation
{

    private $stock_id;
    private $row_count = 0;

    

    public function __construct(int $stock_id)
    {
        $this->stock_id = $stock_id;
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {

        $restock = Restock::create(['stock_id'=>$this->stock_id]);
        foreach ($rows as $row){
            if (!isset($row[0])) {
                return null;
            }    
            // increment row count
            ++$this->row_count;
            $product = Product::create([
                'stock_id' => $this->stock_id,
                'name' => $row[0],
                'units' => $row[1],
                
            ]);

            

            //create restocked products
            $product->restocked_product()->create([
                'restock_id'=>$restock->id,
                'batch_number'=>$row[2],
                'restocked_quantity'=>$row[3],
                'quantity'=>$row[3],
                'buying_price' => $row[4],
                'selling_price' => $row[5],
            ]);
        }
       
    }
    public function startRow(): int
    {
        return 3;
    }
    public function rules(): array
    {
        return [
            '*.1' => 'required|string',
            '*.2' => 'required|numeric',
            '*.4' => 'required|numeric',
            '*.3' => 'required|numeric',
            '*.0' => 'required|string',
        ];
    }
    public function customValidationAttributes()
    {
        return [
            '*.0' => 'product name in row :position',
            '*.1' => 'units in row :position',
            '*.2' => 'amount in row :position',
            '*.3' => 'buying price in row :position',
            '*.4' => 'selling price in row :position',

        ];
    }
    public function getRowCount(): int
    {
        return $this->row_count;
    }
}
