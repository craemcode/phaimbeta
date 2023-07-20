<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StockController;
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
    Route::post('product/create/new',[ProductController::class, 'store'])->name('product.store');
    Route::get('/product/{product}/info',[ProductController::class, 'show'])->name('product.show');
    //Route::get('product/restock',[ProductController::class, 'restock'])->name('product.restock');
    //Route::post('stocks/{product}/restock',[ProductController::class, 'update'])->name('product.restock');
    
    
    
    
    
    
    
    
    //profile controllers
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
