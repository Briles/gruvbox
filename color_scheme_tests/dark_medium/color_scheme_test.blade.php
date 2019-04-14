{{-- COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "blade" --}}

{{-- comment --}}
{{-- ^^^^^^^ fg=#928374 fs=italic --}}
{{--         ^^^^ fg=#928374 fs=italic --}}

<!-- comment -->
{{-- ^^^^^^^ fg=#928374 fs=italic --}}
{{--         ^^^ fg=#928374 fs=italic --}}

     <!DOCTYPE html>
{{-- ^^ fg=#458588 fs= --}}
{{--   ^^^^^^^ fg=#fb4934 fs= --}}
{{--           ^^^^ fg=#d3869b fs= --}}
{{--               ^ fg=#458588 fs= --}}

@section('content')
{{-- ^^^ fg=#83a598 fs= --}}
{{--    ^^ fg=#ebdbb2 fs= --}}
{{--      ^^^^^^^ fg=#b8bb26 fs= --}}
{{--             ^^ fg=#ebdbb2 fs= --}}

    <div class="panel-body">
        @include('common.errors')
{{--    ^ fg=#d3869b fs= --}}
{{--     ^^^^^^^ fg=#83a598 fs= --}}
{{--            ^^ fg=#ebdbb2 fs= --}}
{{--              ^^^^^^^^^^^^^ fg=#b8bb26 fs= --}}
{{--                           ^^ fg=#ebdbb2 fs= --}}

        <form action="/task">{{ csrf_field() }}</form>
{{--    ^ fg=#458588 fs= --}}
{{--     ^^^^ fg=#83a598 fs= --}}
{{--          ^^^^^^ fg=#fabd2f fs= --}}
{{--                ^^ fg=#ebdbb2 fs= --}}
{{--                  ^^^^^ fg=#b8bb26 fs= --}}
{{--                       ^ fg=#ebdbb2 fs= --}}
{{--                        ^ fg=#458588 fs= --}}
{{--                         ^^ fg=#8ec07c fs= --}}
{{--                            ^^^^^^^^^^ fg=#8ec07c fs= --}}
{{--                                      ^^ fg=#bdae93 fs= --}}
{{--                                         ^^ fg=#8ec07c fs= --}}
{{--                                           ^^ fg=#458588 fs= --}}
{{--                                             ^^^^ fg=#83a598 fs= --}}
{{--                                                 ^ fg=#458588 fs= --}}

    </div>

     @endsection
{{-- ^ fg=#d3869b fs= --}}
{{--  ^^^^^^^^^^ fg=#83a598 fs= --}}
