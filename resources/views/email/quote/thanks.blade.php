<x-mail::message>
# Hi, {{ $name }}

Thank you for contacting us.


<x-mail::button color="sky" :url="''">
Button Text
</x-mail::button>


Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
