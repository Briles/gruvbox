# COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "CoffeeScript"

### block ###
# ^ fg=#928374 fs=italic
#   ^^^^^ fg=#928374 fs=italic
#         ^^^ fg=#928374 fs=italic

# comment
# ^^^^^^^ fg=#928374 fs=italic

### # @param int $x desc ###
# ^ fg=#928374 fs=italic
#   ^ fg=#928374 fs=italic
#     ^^^^^^ fg=#bdae93 fs=italic
#            ^^^ fg=#928374 fs=italic
#                ^^ fg=#928374 fs=italic
#                   ^^^^ fg=#928374 fs=italic
#                        ^^^ fg=#928374 fs=italic

class this.Student
# ^^^ fg=#fb4934 fs=
#     ^^^^^^^^^^^^ fg=#fabd2f fs=

  constructor: (options) ->
# ^^^^^^^^^^^ fg=#b8bb26 fs=
#            ^ fg=#8ec07c fs=
#              ^^^^^^^^^ fg=#ebdbb2 fs=
#                        ^^ fg=#8ec07c fs=

    {@name, @age, @score} = options
#   ^ fg=#8ec07c fs=
#    ^^^^^ fg=#83a598 fs=
#         ^ fg=#ebdbb2 fs=
#           ^^^^ fg=#83a598 fs=
#               ^ fg=#ebdbb2 fs=
#                 ^^^^^^ fg=#83a598 fs=
#                       ^ fg=#8ec07c fs=
#                         ^ fg=#8ec07c fs=
#                           ^^^^^^^ fg=#ebdbb2 fs=

  grade: ->
# ^^^^^ fg=#b8bb26 fs=
#      ^ fg=#8ec07c fs=
#        ^^ fg=#8ec07c fs=

    switch
#   ^^^^^^ fg=#fb4934 fs=

      when @score < 60 then 'F'
#     ^^^^ fg=#fb4934 fs=
#          ^^^^^^ fg=#83a598 fs=
#                 ^ fg=#8ec07c fs=
#                   ^^ fg=#d3869b fs=
#                      ^^^^ fg=#fb4934 fs=
#                           ^ fg=#ebdbb2 fs=
#                            ^ fg=#b8bb26 fs=
#                             ^ fg=#ebdbb2 fs=

      else 'A'
#     ^^^^ fg=#fb4934 fs=
#          ^ fg=#ebdbb2 fs=
#           ^ fg=#b8bb26 fs=
#            ^ fg=#ebdbb2 fs=
