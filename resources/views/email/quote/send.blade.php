<x-mail::message>
# From {{ config('app.name') }}
### Subject: {{ $subject }}

<x-mail::table>
|||
|:---------- | ------------:|
| Name | {{ $name }} |
| Email | {{ $email }} |
| Phone | {{ $phone }} |
</x-mail::table>


{!! nl2br($message) !!}

Thanks,<br>
{{ config('app.name') }} (PTY) Ltd.
</x-mail::message>
