<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'user_id',
    ];
     /**
     * Get the prdocuts from the stock.
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
