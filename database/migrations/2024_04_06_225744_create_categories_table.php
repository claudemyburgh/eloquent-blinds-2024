<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration {
        /**
         * Run the migrations.
         */
        public function up(): void
        {
            Schema::create('categories', function (Blueprint $table) {
                $table->id();
                $table->uuid('uuid')->unique();
                $table->string('title')->nullable();
                $table->string('slug')->unique()->index();
                $table->foreignId('parent_id')->nullable()->constrained('categories');
                $table->text('excerpt')->nullable();
                $table->text('body')->nullable();
                $table->boolean('popular')->default(false);
                $table->boolean('live')->default(true);
                $table->softDeletes();
                $table->timestamps();
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::dropIfExists('categories');
        }
    };
