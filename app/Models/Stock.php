<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;


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

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function sold_product():HasManyThrough
    {
        return $this->hasManyThrough(SoldProduct::class,Sale::class);
    }

    public function sale():HasMany
    {
        return $this->hasMany(Sale::class);
    }

    public function restock():HasMany
    {
        return $this->hasMany(Restock::class);
    }
}

