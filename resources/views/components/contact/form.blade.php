<div class="panel">
    <h3 class="panel-heading">Get Quote</h3>
    <form method="post" action="{{ route('quote.send') }}" class="space-y-4">
        @csrf
        @method('POST')
        <div class="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
            <div class="col-span-2 md:col-span-1">
                <label for="first_name" class="block font-medium text-sm text-gray-700 dark:text-gray-300">First Name</label>
                <input type="text" name="first_name" id="first_name" value="{{old('first_name')}}" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500">
                @error('first_name')
                <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
                @enderror
            </div>

            <div class="col-span-2 md:col-span-1">
                <label for="last_name" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Last Name</label>
                <input type="text" name="last_name" value="{{old('last_name')}}" id="last_name" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500
                dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500">
                @error('last_name')
                <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
                @enderror
            </div>


            <div class="col-span-2 md:col-span-1">
                <label for="email" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" id="email" value="{{old('email')}}" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500">
                @error('email')
                <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
                @enderror
            </div>


            <div class="col-span-2 md:col-span-1">
                <label for="phone" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Phone number</label>
                <input type="tel" name="phone" id="phone" value="{{old('phone')}}" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500">
                @error('phone')
                <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
                @enderror
            </div>

        </div>

        <div>
            <label for="subject" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Subject</label>
            <input type="text" name="subject" id="subject" value="{{old('subject')}}" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500">
            @error('subject')
            <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
            @enderror
        </div>

        <div>
            <label for="message" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Message</label>
            <textarea name="message" id="message" class="mt-2 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600
                focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500 min-h-[175px]">{{old('message')}}</textarea>
            @error('message')
            <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{$message}}</p>
            @enderror
        </div>


        <button type="submit"
                class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
            Send
        </button>

    </form>

</div>


