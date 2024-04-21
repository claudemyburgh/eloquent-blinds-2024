<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Propaganistas\LaravelPhone\PhoneNumber;

class QuoteSendRequest extends FormRequest
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
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|phone:ZA',
            'subject' => 'required',
            'message' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'phone' => 'The :attribute field must be a valid number.',
        ];
    }

    public function passedValidation(): void
    {
        $this->replace(['phone' => (string) new PhoneNumber($this->phone, 'ZA')]);
    }
}
