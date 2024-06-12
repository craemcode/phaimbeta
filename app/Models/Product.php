<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Product extends Model
{
    use HasFactory;
    protected $guarded = ['id']; 

    protected $fillable = [
        'name',
        'units',
        'stock_id',
    ];

    public function stock(){
        return $this->belongsTo(Stock::class);
    }

    public function restocked_product():HasMany
    {
        return $this->hasMany(RestockedProduct::class);
    }

    public function sold_product():HasMany
    {
        return $this->hasMany(SoldProduct::class);
    }
}
