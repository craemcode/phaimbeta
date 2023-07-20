<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;



class ProductController extends Controller
{   


    /**
     * Display a listing of the resource.
     */
    public function index(Stock $stock)
    {
        $stock_id = $stock->id;

        $products = Product::where('stock_id', $stock_id)->get();
       
       
        return Inertia::render('Records/ProductsDashboard',[
            'products'=>$products, 
            'stock'=>$stock->only('id','name')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Stock $stock)
    {
        return Inertia::render('Records/CreateProduct',['stock'=>$stock]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'productName'=>'required|bail|string|max:255',
        'productUnit'=>'required|bail|string|max:100',
        'productAmount'=>'required|bail|numeric',
        'productBuyingPrice'=>'required|bail|numeric',
        'productSellingPrice'=>'required|bail|numeric',
       ]);
       
       $product = new Product;
       $product->stock_id = $request->stock_id;
       $product->name = $request->productName;
       $product->units = $request->productUnit;
       $product->amount = $request->productAmount;
       $product->buying_price = $request->productBuyingPrice;
       $product->selling_price = $request->productSellingPrice;

       $product->save();

       return to_route('products.show',$request->stock_id)->with('success','Product Successfully added');
       

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        
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
