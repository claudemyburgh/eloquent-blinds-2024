<?php

    namespace App\Http\Requests\Products;

    use Illuminate\Contracts\Validation\ValidationRule;
    use Illuminate\Foundation\Http\FormRequest;

    class UpdateProductRequest extends FormRequest
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
                'title' => 'required|unique:products,title,' . $this->product,
                'slug' => 'required|unique:products,slug,' . $this->product,
                'category_id' => 'required',
                'excerpt' => 'required|max:500',
                'body' => 'required',
                'popular' => 'required',
                'live' => 'required',
            ];
        }
    }
