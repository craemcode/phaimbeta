<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SaleController extends Controller
{

    //show sales on the front end
    public function index(Stock $stock){
        $stock_id = $stock->id;
        $sales = Sale::where('stock_id', $stock_id)->orderBy('created_at','desc')->get();


        //calculate total sales.
        $tot_sales = DB::table('sold_products')
                        ->join('sales','sold_products.sales_id','=','sales.id')
                        ->select('sales.stock_id','sold_products.quantity','sold_products.selling_price')
                        ->where('stock_id',$stock_id)
                        ->get();
        

        $gross_sales = $tot_sales->map(function ($sale){
             //gross sales
            $g_s = $sale->quantity*$sale->selling_price;
            return $g_s;
        });


        //tot_restocks
        $tot_restocks = DB::table('restocked_products')
                        ->join('restocks','restocked_products.restock_id','=','restocks.id')
                        ->select('restocks.stock_id','restocked_products.restocked_quantity','restocked_products.buying_price')
                        ->where('stock_id',$stock_id)
                        ->get();

        $purchases = $tot_restocks->map(function ($purchase){
                $purchases = $purchase->restocked_quantity*$purchase->buying_price;
                return $purchases;
        });

        //do not pass whole arrays. just pass the sum of gross sales and purchases
        $stats = collect([array_sum($gross_sales->all()),array_sum($purchases->all())]);
        

        return Inertia::render('Records/Sales',
        [
            'sales'=>$sales,
            'stats'=>$stats,
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

        //validating the nested array from the sales cart.
        $validator = Validator::make($data,[
                '*.id'=>'required',
                '*.product_id'=>'required',
                '*.quantity'=>'required',
                '*.qty'=>'required',
                '*.selling_price'=>'required'
        ],[
            '*.qty.required'=>"The quantity to be sold is required. ",
            '*.selling_price.required'=>"The selling price is required. "
        ]);
        //redirect to the cart if the validation fails. 
        if ($validator->fails()) {
            return to_route('products.show',$stock_id)->with('error',$validator->errors()->all(':message'));
       }
       $data = $validator->validated(); 

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
        
        //$sold_products = $stock->sold_product()->get();    
        return Inertia::render('Records/SoldProducts',
                ['sold_products'=>$sold_products,
                'sale'=>$sale,
                'stock'=>$stock->only('id','name')]
            );
    }
}
