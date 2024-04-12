<?php

    namespace App\Http\Requests\Products;

    use Illuminate\Contracts\Validation\ValidationRule;
    use Illuminate\Foundation\Http\FormRequest;

    class StoreProductRequest extends FormRequest
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
                'title' => [
                    'required',
                    'unique:products',
                ],
                'category_id' => 'required'
            ];
        }

        public function messages(): array
        {
            return [
                'category_id.required' => "A category is required"
            ];
        }
    }
