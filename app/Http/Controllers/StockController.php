<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();

        $stocks = Stock::where('user_id', $user_id)->get();
       
       
        return Inertia::render('Dashboard',['stocks'=>$stocks]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Records/CreateStock');
        
        
        
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $request->validate([
        'pharmacy'=>'required|bail|max:255',
        'location'=>'required|bail|max:100',
       ]);
       //the user who makes the stock owns it
       $user_id = Auth::id();


       $stock = new Stock;
       $stock->user_id = $user_id;
       $stock->name = $request->pharmacy;
       $stock->location = $request->location;
       $stock->save();

       return to_route('dashboard')->with('success','Stock successfully added');

        






    }

    /**
     * Display the specified resource.
     */
    public function show(Stock $stock)
    {
        return Inertia::render('Records/ProductsDashboard',['stock'=>$stock]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stock $stock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock $stock)
    {
        //
    }
}
