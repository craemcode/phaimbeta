<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\Stock;
use App\Models\Restock;
use Inertia\Inertia;

class RestockController extends Controller
{
    //should show all the restocks that have happened. coming soon.
    public function index(Stock $stock)
    {
        $stock_id = $stock->id;

        $products = Product::where('stock_id', $stock_id)->get();
       
       
        return Inertia::render('Records/RestockDashboard',[
            'products'=>$products, 
            'stock'=>$stock->only('id','name')]);
        }

    //function to create a restock
    public function store(Request $request)
    {
        //extract the array to a variable
        $data = $request->all();

        //create a new restock
        $restock = new Restock;
        $stock_id = $data[0]['stock_id'];
        $restock->stock_id = $stock_id;
        $restock->save();

        //get the restock id
        $restock_id = $restock->id;

        //create a query for each product of the restock.
        for ($i=0;$i<count($data);$i++){
            //create an array for storing the restock data
            $restockData = [
            'product_id' =>$data[$i]['id'],
            'restock_id' =>$restock_id,
            'product_quantity' =>$data[$i]['qty'],
            'product_buying_price' =>$data[$i]['buying_price'],
            'product_batch_number'=>$data[$i]['batch_no'],
            ];
            //update amount in stock...can we do this after the db is successful.
            $amountinstock = $data[$i]['amount'] + $data[$i]['qty'];
            
            DB::table('restocked_products')->insert($restockData);
            DB::table('products')
                ->where('id',$data[$i]['id'])
                ->update(['amount'=>$amountinstock]);
                         
        }
        return to_route('product.available_to_restock',$stock_id)->with('success','Restock Successful');
    }
}
