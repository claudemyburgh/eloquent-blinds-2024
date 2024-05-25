<?php

    namespace App\Models;

    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Post extends Model
    {
        use HasFactory, Sluggable;

        protected $fillable = [
            'id',
            'title',
            'slug',
            'body',
            'user_id',
        ];


        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class);
        }


    }
