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
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $stock_id = $request->session()->get('stock_id');
        $stock = Stock::where('id',$stock_id)->first();
        
        return Inertia::render('Records/CreateProduct',['stock'=>$stock]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'productName'=>'required|bail|max:255',
        'productUnits'=>'required|bail|max:100',
        'productAmount'=>'required|bail|max:100',
        'productBuyingPrice'=>'required|bail|max:100',
        'productSellingPrice'=>'required|bail|max:100',
       ]);
       
       $product = new Product;
       $stock_id = $request->session()->get('stock_id');
       
       $product->stock_id = $stock_id;
       $product->name = $request->productName;
       $product->units = $request->productUnits;
       $product->amount = $request->productAmount;
       $product->buying_price = $request->productBuyingPrice;
       $product->selling_price = $request->productSellingPrice;

       $product->save();

       return to_route('products.show',$stock_id)->with('success','Product Successfully added');
       

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
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
