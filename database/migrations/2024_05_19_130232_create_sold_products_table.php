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
        /*
        This table contains all items sold during a sale.
         */
        Schema::create('sold_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id')->constrained(
                table:'restocked_products', indexName: 'item_id'
            );
            $table->foreignId('sales_id')->constrained(
                table:'sales', indexName: 'sales_id'
            );
            $table->foreignId('product__id')->constrained(
                table:'products',indexName: 'product__id'
            );
            $table->integer('quantity');
            $table->float('selling_price');
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
