<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SoldProduct extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    protected $fillable = [
        'sales_id',
        'quantity',
        'selling_price'
    ];

    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function sale():BelongsTo
    {
        return $this->belongsTo(Restock::class);
    }
}
