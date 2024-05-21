<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleController extends Controller
{

    //show sales on the front end
    public function index(Stock $stock){
        $stock_id = $stock->id;
        $sales = Sale::where('stock_id', $stock_id)->orderBy('created_at','desc')->get();

        return Inertia::render('Records/Sales',
        [
            'sales'=>$sales,
            'stock'=>$stock->only('id','name')
        ]);
    }
    //function to create a sale
    public function store( Request $request)
    {
        //extract the array to a variable
        $data = $request->all();
        
        //create a new sale
        $sale = new Sale;
        $stock_id =  $data[0]['stock_id'];
        $sale->stock_id = $stock_id;
        $sale->save();
        
        //get sale id
        $sale_id = $sale->id;

        //sale first function...creates a query for each product
        for ($i=0;$i<count($data);$i++){
            //create an array for storing the sales data
            $saleData = [
                'product_id' => $data[$i]['id'],
                'sales_id' =>$sale_id,
                'product_quantity' =>$data[$i]['qty'],
                'product_selling_price' =>$data[$i]['selling_price'],
            ];
            //update amount in stock...can we do this after the db is successful.
            $amountinstock = $data[$i]['amount'] - $data[$i]['qty'];
            DB::table('sold_products')->insert($saleData);
            DB::table('products')
                ->where('id',$data[$i]['id'])
                ->update(['amount'=>$amountinstock]);
        }

        //once the sales are done, we need to call update on product amounts.




      return to_route('products.show',$stock_id)->with('success','Sale Successful');
        
    }

    public function show(Stock $stock, Sale $sale){
        $sold_products = DB::table('sold_products')
                            ->join('products','sold_products.product_id','=','products.id')
                            //select all rows in sold products and product name
                            ->select('sold_products.*','products.name','products.units')
                            ->where('sales_id',$sale->id)->get();
        
            
        return Inertia::render('Records/SoldProducts',
                ['sold_products'=>$sold_products,
                'sale'=>$sale,
                'stock'=>$stock->only('id','name')]
            );
    }
}
