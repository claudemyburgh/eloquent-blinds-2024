<?php

    namespace App\Http\Requests\Galleries;

    use Illuminate\Contracts\Validation\ValidationRule;
    use Illuminate\Foundation\Http\FormRequest;

    class UpdateGalleryRequest extends FormRequest
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
                'title' => 'required',
                'slug' => 'required|unique:galleries,slug,' . $this->gallery,
                'description' => 'nullable|max:500',
                'body' => 'nullable',
                'live' => 'nullable',
            ];
        }
    }
