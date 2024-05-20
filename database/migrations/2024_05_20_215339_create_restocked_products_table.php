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
        Schema::create('restocked_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained(
                table:'products', indexName: 'product_id'
            );
            $table->foreignId('restock_id')->constrained(
                table:'restocks', indexName:'restocks_id'
            );
            $table->integer('product_quantity');
            $table->integer('product_buying_price');
            $table->string('product_batch_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restocked_products');
    }
};
