<?php

    namespace App\Models;

    use App\Traits\Live;
    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

    class Category extends Model
    {
        use HasFactory, SoftDeletes, Sluggable, Live, HasRecursiveRelationships;

        protected $fillable = [
            'uuid',
            'title',
            'slug',
            'parent_id',
            'excerpt',
            'body',
            'popular',
            'live',
        ];

    }
