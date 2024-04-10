<?php

    namespace App\Http\Requests\Categories;

    use Illuminate\Contracts\Validation\ValidationRule;
    use Illuminate\Foundation\Http\FormRequest;

    class UpdateCategoryRequest extends FormRequest
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
                'title' => 'required|unique:categories,title,' . $this->category,
                'slug' => 'required|unique:categories,slug,' . $this->category,
                'parent_id' => 'nullable',
                'excerpt' => 'required|max:500',
                'body' => 'required',
                'popular' => 'required',
                'live' => 'required',
            ];
        }
    }
