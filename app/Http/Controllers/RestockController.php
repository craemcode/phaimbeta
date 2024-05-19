<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Stock;
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
        dd($request);
    }
}
