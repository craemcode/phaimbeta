<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stock extends Model
{
    use HasFactory;
     /**
     * Get the prdocuts from the stock.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
