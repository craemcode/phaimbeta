<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Restock extends Model
{
    use HasFactory;

    protected $fillable = [
        'stock_id',
    ];
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
