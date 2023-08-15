<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    //show the imports page
    public function show(Stock $stock) :Response
    {
        return inertia('Imports/Products',[
            'stock'=>$stock->only(['id','name'])
        ]);
    }
}
