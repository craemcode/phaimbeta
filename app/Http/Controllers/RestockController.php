<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\Stock;
use App\Models\Restock;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class RestockController extends Controller
{
    //should show all the restocks that have happened. coming soon.
    public function index(Stock $stock)
    {
        $stock_id = $stock->id;

        //$products = Product::where('stock_id', $stock_id)->get();
        $products = DB::table('restocked_products')
                            ->join('products','restocked_products.product_id','=','products.id')
                            ->select('restocked_products.*','products.name','products.units')
                            ->where('products.stock_id','=', $stock_id)
                            ->where('restocked_products.quantity','>',0)//only get items that are in stock
                            ->get();
       
        
        return Inertia::render('Records/RestockDashboard',[
            'products'=>$products, 
            'stock'=>$stock->only('id','name')]);
        }
    
     //show restocks on the front end
    public function list(Stock $stock){
        $stock_id = $stock->id;
        $restocks = Restock::where('stock_id', $stock_id)->orderBy('created_at','desc')->get();

        return Inertia::render('Records/Restocks',
        [
            'restocks'=>$restocks,
            'stock'=>$stock->only('id','name')
        ]);
    }

    //function to create a restock
    public function store(Request $request)
    {
                
        //extract the array to a variable
        $data = $request->all();
       
        //create a new restock
        $restock = new Restock;

        //if you make a restock from the items in stock table, there will be trouble because the request will not have a 
        // stock id variable. in that case, we can use the product's table to get the id because a product belongs to a specific stock.

        //the opposite is also true. Use dd(request) to understand
        if(array_key_exists('stock_id',$data[0])){
            
            $stock_id = $data[0]['stock_id'];
            $validator = Validator::make($data,[
                '*.id'=>'required',
                '*.qty'=>'required',
                '*.batch_no'=>'required',
                '*.buying_price'=>'required',
                '*.selling_price'=>'required'
            ],[
                '*.batch_no.required'=>"The batch number (exp) required.",
                '*.buying_price.required'=>'The buying price is required.',
                '*.selling_price.required'=>'The selling price is required.'
            ]); 

            if ($validator->fails()) {
                return to_route('product.products_in_stock',$stock_id)->with('error',$validator->errors()->all(':message'));
           }             
   
           $data = $validator->validated();

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
                    'quantity' =>$data[$i]['qty'],
                    'restocked_quantity' => $data[$i]['qty'],
                    'buying_price' =>$data[$i]['buying_price'],
                    'selling_price' =>$data[$i]['selling_price'],
                    'batch_number'=>$data[$i]['batch_no'],
                    ];
                    DB::table('restocked_products')->insert($restockData);
                }
             }else{
                $product_id = $data[0]['product_id'];

                $product = DB::table('products')
                        ->where('id',$product_id)->first();
        
                $stock_id = $product->stock_id;

                //validation for the stocked products page
                $validator = Validator::make($data,[
                    '*.product_id'=>'required',
                    '*.qty'=>'required',
                    '*.batch_no'=>'required',
                    '*.buying_price'=>'required',
                    '*.selling_price'=>'required'
                ],[
                    '*.batch_no.required'=>"The batch number (exp) required. ",
                    '*.buying_price.required'=>'The buying price is required. ',
                    '*.selling_price.required'=>'The selling price is required. '
                ]); 

                if ($validator->fails()) {
                    return to_route('product.products_in_stock',$stock_id)->with('error',$validator->errors()->all(':message'));
               }             
       
               $data = $validator->validated();

                $restock->stock_id = $stock_id;
                $restock->save();

                //get the restock id
                $restock_id = $restock->id;

                //create a query for each product of the restock.
                for ($i=0;$i<count($data);$i++){
                    //create an array for storing the restock data
                    $restockData = [
                    'product_id' =>$data[$i]['product_id'],
                    'restock_id' =>$restock_id,
                    'quantity' =>$data[$i]['qty'],
                    'restocked_quantity' => $data[$i]['qty'],
                    'buying_price' =>$data[$i]['buying_price'],
                    'selling_price' =>$data[$i]['selling_price'],
                    'batch_number'=>$data[$i]['batch_no'],
                    ];
                    DB::table('restocked_products')->insert($restockData);
                }
        }      
            
            
        
            
                         
        
        return to_route('product.products_in_stock',$stock_id)->with('success','Restock Successful');
    }

    public function show(Stock $stock, Restock $restock){
        $restocked_products = DB::table('restocked_products')
                            ->join('products','restocked_products.product_id','=','products.id')
                            //select all rows in restocked products and product name
                            ->select('restocked_products.*','products.name','products.units')
                            ->where('restock_id',$restock->id)->get();
        
            
        return Inertia::render('Records/RestockedProducts',
                ['restocked_products'=>$restocked_products,
                'restock'=>$restock,
                'stock'=>$stock->only('id','name')]
            );
    }

    public function out_of_stock_list(Stock $stock){
        $stock_id = $stock->id;
        $out_of_stock_products = DB::table('restocked_products')
                                ->join('products','restocked_products.product_id','=','products.id')
                                ->select('restocked_products.*','products.name','products.units')
                                ->where('products.stock_id','=', $stock_id)
                                ->where('restocked_products.quantity','<=',0)//only get items that are out of stock
                                ->get();
                                
        return Inertia::render('Records/RestockDashboard',[
            'products'=>$out_of_stock_products, 
            'stock'=>$stock->only('id','name')]);
    }

}
