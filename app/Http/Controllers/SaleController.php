<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{

    //show sales on the front end
    public function index(Stock $stock, Sale $sale){
        $stock_id = $stock->id;
    }
    //function to create a sale
    public function store( Request $request)
    {
        $data = $request->all();
        $sale = new Sale;
        $stock_id =  $data[0]['stock_id'];//$request->get('products')[0]['stock_id'];
        $sale->stock_id = $stock_id;
        $sale->save();
        
        //get id
        $sale_id = $sale->id;
        
      
        

        //sale first func
        for ($i=0;$i<count($data);$i++){
            $salesData = [
                'product_id' => $data[$i]['id'],
                'sales_id' =>$sale_id,
                'product_quantity' =>$data[$i]['qty'],
                'product_selling_price' =>$data[$i]['selling_price'],
            ];
            DB::table('sold_products')->insert($salesData);
        }
      return to_route('products.show',$stock_id)->with('success','Sale Successful');
        
    }
}
