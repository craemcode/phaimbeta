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
        $restock_id =  $data[0]['restock_id'];

        $restock = DB::table('restocks')
                    ->where('id',$restock_id)->first();
        
        $stock_id = $restock->stock_id;


        
        $sale->stock_id = $stock_id;
        $sale->save();
        
        //get sale id
        $sale_id = $sale->id;

        //sale first function...creates a query for each product
        for ($i=0;$i<count($data);$i++){
            //create an array for storing the sales data
            $saleData = [
                'item_id' => $data[$i]['id'],
                'product__id'=>$data[$i]['product_id'],
                'sales_id' =>$sale_id,
                'quantity' =>$data[$i]['qty'],
                'selling_price' =>$data[$i]['selling_price'],
            ];
            //update amount in stock...can we do this after the db is successful.
            $amountinstock = $data[$i]['quantity'] - $data[$i]['qty'];
            DB::table('sold_products')->insert($saleData);
            DB::table('restocked_products')
                ->where('id',$data[$i]['id'])
                ->update(['quantity'=>$amountinstock]);
        }

        //once the sales are done, we need to call update on product amounts.




      return to_route('products.show',$stock_id)->with('success','Sale Successful');
        
    }

    public function show(Stock $stock, Sale $sale){
        $sold_products = DB::table('sold_products')
                            ->join('products','sold_products.product__id','=','products.id')//NB: The foreign key constraint for product id has double underscore.
                            ->join('restocked_products','sold_products.item_id','=','restocked_products.id')
                            //select all rows in sold products and product name
                            ->select('sold_products.*','products.name','products.units','restocked_products.batch_number')
                            ->where('sales_id',$sale->id)->get();
        
            
        return Inertia::render('Records/SoldProducts',
                ['sold_products'=>$sold_products,
                'sale'=>$sale,
                'stock'=>$stock->only('id','name')]
            );
    }
}
