<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Stock;
use Inertia\Inertia;

class RestockController extends Controller
{
    //
    public function index(Stock $stock)
    {
        $stock_id = $stock->id;

        $products = Product::where('stock_id', $stock_id)->get();
       
       
        return Inertia::render('Records/ProductsDashboard',[
            'products'=>$products, 
            'stock'=>$stock->only('id','name')]);
        }
}
