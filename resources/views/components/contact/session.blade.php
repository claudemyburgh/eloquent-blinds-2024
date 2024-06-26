@if(session('status'))
    <div class="rounded-md bg-green-100 shadow p-4 mb-4 lg:w-[360px] mx-auto fixed top-2 right-2 z-[2000] animate-slide-out-right translate-x-[200%]">
        <div class="flex">
            <div class="flex-shrink-0">
                <!-- Heroicon name: solid/check-circle -->
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800">Email Delivered</h3>
                <div class="mt-2 text-sm text-green-700">
                    <p>{{session('status')}}</p>
                </div>
            </div>
        </div>
    </div>
@endif
@if(session('errors'))
    <div class="rounded-md bg-red-100 isolate shadow p-4 mb-4 lg:w-[360px] mx-auto fixed top-2 right-2 z-[2000] animate-slide-out-right translate-x-[200%]">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">Error</h3>
                <div class="mt-2 text-sm text-red-700">
                    <p>Oops! something went wrong.</p>
                </div>
            </div>
        </div>
    </div>
@endif

