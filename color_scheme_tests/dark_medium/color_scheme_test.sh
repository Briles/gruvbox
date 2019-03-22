# COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).tmTheme" SKIP IF NOT "Bash"

set -e
# ^ fg=#8ec07c fs=
#   ^^ fg=#fbf1c7 fs=

unset CDPATH
# ^^^ fg=#8ec07c fs=
#     ^^^^^^ fg=#fbf1c7 fs=

abc="y"
# ^ fg=#83a598 fs=
#  ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^ fg=#fbf1c7 fs=

x="$y"
# ^ fg=#fbf1c7 fs=
#  ^ fg=#458588 fs=
#   ^ fg=#83a598 fs=
#    ^ fg=#fbf1c7 fs=

x="$(basename "$y")"
# ^ fg=#fbf1c7 fs=
#  ^ fg=#458588 fs=
#   ^ fg=#fbf1c7 fs=
#    ^^^^^^^^ fg=#8ec07c fs=
#             ^ fg=#fbf1c7 fs=
#              ^ fg=#458588 fs=
#               ^ fg=#83a598 fs=
#                ^^^ fg=#fbf1c7 fs=

x="./${x#$HOME/}"
# ^ fg=#fbf1c7 fs=
#  ^^ fg=#b8bb26 fs=
#    ^ fg=#458588 fs=
#     ^ fg=#fbf1c7 fs=
#      ^ fg=#83a598 fs=
#       ^ fg=#8ec07c fs=
#        ^ fg=#458588 fs=
#         ^^^^ fg=#83a598 fs=
#             ^^^ fg=#fbf1c7 fs=

a=${b%/} c=${d%.e}
# ^ fg=#458588 fs=
#  ^ fg=#fbf1c7 fs=
#   ^ fg=#83a598 fs=
#    ^ fg=#8ec07c fs=
#     ^^ fg=#fbf1c7 fs=
#        ^ fg=#83a598 fs=
#         ^ fg=#8ec07c fs=
#          ^ fg=#458588 fs=
#           ^ fg=#fbf1c7 fs=
#            ^ fg=#83a598 fs=
#             ^ fg=#8ec07c fs=
#              ^^^ fg=#fbf1c7 fs=
