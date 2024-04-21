<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
    ];

    protected $casts = [
        'avatar' => 'string',
    ];

    protected $appends = [
        'avatar',
        'fullName',
    ];

    public function getAvatarAttribute(): string
    {
        return "https://ui-avatars.com/api/?size=38&background=0f172a&color=0ea5e9&name=$this->first_name+$this->last_name";
    }

    public function getFullNameAttribute(): string
    {
        return $this->first_name.' '.$this->last_name;
    }
}
