<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sold_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained(
                table:'products', indexName: 'products_id'
            );
            $table->foreignId('sales_id')->constrained(
                table:'sales', indexName: 'sales_id'
            );
            $table->integer('product_quantity');
            $table->integer('product_selling_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sold_products');
    }
};
