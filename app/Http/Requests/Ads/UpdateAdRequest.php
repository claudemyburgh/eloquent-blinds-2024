<?php

    namespace App\Http\Requests\Ads;

    use Illuminate\Contracts\Validation\ValidationRule;
    use Illuminate\Foundation\Http\FormRequest;

    class UpdateAdRequest extends FormRequest
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
                'title' => 'required|unique:ads,title,' . $this->ad,
                'slug' => 'required|unique:ads,slug,' . $this->ad,
                'description' => 'required',
                'product_id' => 'nullable'
            ];
        }
    }
