<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestockedProduct extends Model
{
    use HasFactory;

    protected $guarded = ['id']; 

    protected $fillable = [
        'restock_id',
        'batch_number',
        'restocked_quantity',
        'quantity',
        'buying_price',
        'selling_price' 
    ];
}
