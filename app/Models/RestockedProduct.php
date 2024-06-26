<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function restock():BelongsTo
    {
        return $this->belongsTo(Restock::class);
    }
}
