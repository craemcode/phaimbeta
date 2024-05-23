<?php

namespace App\Http\Controllers;

use App\Imports\ProductsImport;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{   

    /**
     * Bulk import products
    */
    public function import(Request $request,Stock $stock)
    {
        $request->validate([
            'uploaded_products_excel' => 'required|mimes:xlsx',
        ]);
        $file = $request->file('uploaded_products_excel');
        if ($file)
        {
            $import = new ProductsImport($stock->id);
            Excel::import($import,$file,readerType:ExcelExcel::XLSX);
            return to_route('products.show',$stock->id)->with('success',$import->getRowCount().' Products Successfully added');
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Stock $stock)
    {
        $stock_id = $stock->id;

        $products = DB::table('restocked_products')
        ->join('products','restocked_products.product_id','=','products.id')
        ->select('restocked_products.*','products.name','products.units')
        ->where('products.stock_id','=', $stock_id)
        ->get();

        //filter all the items that are out of stock.
        $products = $products->filter(function($product){
            return $product->quantity > 0;
        })->values();
        
        
       //$products = array_filter($products, "filter_zeros");
       
        return Inertia::render('Records/ProductsDashboard',[
            'products'=>$products, 
            'stock'=>$stock->only('id','name')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Stock $stock)
    {
        return Inertia::render('Records/CreateProduct',['stock'=>$stock->only('id','name')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'productName'=>'required|bail|string|max:255',
        'productUnit'=>'required|bail|string|max:100',
       ]);
       
       $product = new Product;
       $product->stock_id = $request->stock_id;
       $product->name = $request->productName;
       $product->units = $request->productUnit;

       $product->save();

       return to_route('product.products_in_stock',$request->stock_id)->with('success','Product Successfully added');
       

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $stock = Stock::where('id', $product->stock_id)->first();

        return Inertia::render('Records/Product',['product'=>$product, 'stock'=>$stock->only('name','id')]);
    }
    
    
    /**
     * 
     * Use this function to show all products. Useful when you want to restock a product that does not show up in the restocked products page.
     */
    public function list(Stock $stock)
    {
        $stock_id = $stock->id;
        $products = Product::where('stock_id', $stock_id)->get();
        
        return Inertia::render('Records/RestockDashboard',['products'=>$products, 'stock'=>$stock->only('name','id')]);
    }

    /**
     * Show the form for restocking the specified product.
     */
    public function restock(Product $product)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
