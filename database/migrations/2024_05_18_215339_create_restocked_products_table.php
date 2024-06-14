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

        // This table conains all items bought during a restock. Also, it contains
        // all items in stock.

        Schema::create('restocked_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained(
                table:'products', indexName: 'product_id'
            );
            $table->foreignId('restock_id')->constrained(
                table:'restocks', indexName:'restocks_id'
            );
            $table->integer('restocked_quantity');
            $table->integer('quantity');
            $table->float('buying_price');
            $table->float('selling_price');
            $table->string('batch_number');
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
