<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
    public function create()
    {
        return Inertia::render('Records/CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'ProuctName'=>'required|bail|max:255',
        'ProductUnits'=>'required|bail|max:100',
        'ProductAmount'=>'required|bail|max:100',
        'ProductBuyingPrice'=>'required|bail|max:100',
        'ProductSellingPrice'=>'required|bail|max:100',
       ]);

       $product = new Product;
       $product->stock_id = $stock_id;//how can i get the stock id if it is not passed in the post request?
       $product->name = $request->productName;
       $product->units = $request->productUnits;
       $product->amount = $request->productAmount;
       $product->buying_price = $request->productBuyingPrice;
       $product->selling_price = $request->productSellingPrice;
       

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
