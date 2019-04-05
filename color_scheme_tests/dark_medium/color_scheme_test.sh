# COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" SKIP IF NOT "Bash"

set -e
# ^ fg=#8ec07c fs=
#   ^^ fg=#ebdbb2 fs=

unset CDPATH
# ^^^ fg=#8ec07c fs=
#     ^^^^^^ fg=#ebdbb2 fs=

abc="y"
# ^ fg=#83a598 fs=
#  ^ fg=#8ec07c fs=
#   ^ fg=#ebdbb2 fs=
#    ^ fg=#b8bb26 fs=
#     ^ fg=#ebdbb2 fs=

x="$y"
# ^ fg=#ebdbb2 fs=
#  ^ fg=#458588 fs=
#   ^ fg=#83a598 fs=
#    ^ fg=#ebdbb2 fs=

x="$(basename "$y")"
# ^ fg=#ebdbb2 fs=
#  ^ fg=#458588 fs=
#   ^ fg=#ebdbb2 fs=
#    ^^^^^^^^ fg=#8ec07c fs=
#             ^ fg=#ebdbb2 fs=
#              ^ fg=#458588 fs=
#               ^ fg=#83a598 fs=
#                ^^^ fg=#ebdbb2 fs=

x="./${x#$HOME/}"
# ^ fg=#ebdbb2 fs=
#  ^^ fg=#b8bb26 fs=
#    ^ fg=#458588 fs=
#     ^ fg=#ebdbb2 fs=
#      ^ fg=#83a598 fs=
#       ^ fg=#8ec07c fs=
#        ^ fg=#458588 fs=
#         ^^^^ fg=#83a598 fs=
#             ^^^ fg=#ebdbb2 fs=

a=${b%/} c=${d%.e}
# ^ fg=#458588 fs=
#  ^ fg=#ebdbb2 fs=
#   ^ fg=#83a598 fs=
#    ^ fg=#8ec07c fs=
#     ^^ fg=#ebdbb2 fs=
#        ^ fg=#83a598 fs=
#         ^ fg=#8ec07c fs=
#          ^ fg=#458588 fs=
#           ^ fg=#ebdbb2 fs=
#            ^ fg=#83a598 fs=
#             ^ fg=#8ec07c fs=
#              ^^^ fg=#ebdbb2 fs=
