<?php

namespace App\Http\Requests\Variants;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateVariantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'product_id' => 'required',
            'code' => 'required|unique:variants,code,'.$this->variant,
            'live' => 'required',
            'popular' => 'required',
        ];
    }
}
