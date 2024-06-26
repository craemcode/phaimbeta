<?php

use App\Http\Controllers\ExportController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\RestockController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        
    ]);
});




//middlewares to protect a group of routes
Route::middleware('auth')->group(function () {
    //stocks controllers
    Route::get('/dashboard',[StockController::class, 'index'])->name('dashboard');
    Route::get('/stocks/create',[StockController::class, 'create'])->name('stocks.create');
    Route::post('/stocks/create/new',[StockController::class, 'store'])->name('stocks.store');
    

    //products controller
    Route::get('stock/{stock}/product/home',[ProductController::class, 'index'])->name('products.show');
    Route::get('stock/{stock}/product/create',[ProductController::class, 'create'])->name('product.create');
    
    //this route is special for the restocks page. Useful when you want to restock something not in stock.
    Route::get('stock/{stock}/product/products_only',[ProductController::class, 'list'])->name('products.show_products_only');

    
    // Route to bulk import products
    Route::post('stock/{stock}/products/import',[ProductController::class,'import'])->name('products.bulk.import');

    //routes for importing bulk products with csv
    Route::get('stock/{stock}/products/import',[ImportController::class, 'show'])->name('import.products');
    Route::get('export-excel-template',ExportController::class)->name('export.excel.template');
    Route::post('product/create/new',[ProductController::class, 'store'])->name('product.store');
    Route::get('/product/{product}/info',[ProductController::class, 'show'])->name('product.show');

    //restock route
    Route::get('stock/{stock}/restock',[RestockController::class, 'index'])->name('product.products_in_stock');
    Route::get('stock/{stock}/out_of_stock',[RestockController::class, 'out_of_stock_list'])->name('product.products_out_of_stock');
    Route::get('stock/{stock}/restocks',[RestockController::class, 'list'])->name('restocks.list');
    Route::post('stock/make_restock',[RestockController::class, 'store'])->name('products.restock');
    Route::get('stock/{stock}/restock/{restock}/show',[RestockController::class,'show'])->name('restock.show');
    
    //routes for making sales and viewing sales data
    Route::post('/stocks/make_sale',[SaleController::class, 'store'])->name('products.sell');
    Route::get('stock/{stock}/sales',[SaleController::class, 'index'])->name('sales.index');
    Route::get('stock/{stock}/sale/{sale}/show',[SaleController::class,'show'])->name('sale.show');
    
    
    
    
    
    
    //profile controllers
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
