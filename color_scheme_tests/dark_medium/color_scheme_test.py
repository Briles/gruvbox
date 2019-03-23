# COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "Python" # flake8: noqa

    # This indented comment is to the preceding whitespace.
#   ^ fg=#928374 fs=italic
#     ^^^^ fg=#928374 fs=italic
#          ^^^^^^^^ fg=#928374 fs=italic
#                   ^^^^^^^ fg=#928374 fs=italic
#                           ^^ fg=#928374 fs=italic
#                              ^^ fg=#928374 fs=italic
#                                 ^^^ fg=#928374 fs=italic
#                                     ^^^^^^^^^ fg=#928374 fs=italic
#                                               ^^^^^^^^^^^ fg=#928374 fs=italic

import os
# ^^^^ fg=#fb4934 fs=
#      ^^ fg=#fbf1c7 fs=

import path from os
# ^^^^ fg=#fb4934 fs=
#      ^^^^ fg=#fbf1c7 fs=
#           ^^^^ fg=#fbf1c7 fs=
#                ^^ fg=#fbf1c7 fs=

__all__
# ^^^^^ fg=#fbf1c7 fs=

__file__
# ^^^^^^ fg=#fbf1c7 fs=

__missing__
# ^^^^^^^^^ fg=#8ec07c fs=

__bool__
# ^^^^^^ fg=#8ec07c fs=

__debug__
# ^^^^^^^ fg=#d3869b fs=

abc = 'x'
# ^ fg=#fbf1c7 fs=
#   ^ fg=#8ec07c fs=
#     ^ fg=#fbf1c7 fs=
#      ^ fg=#b8bb26 fs=
#       ^ fg=#fbf1c7 fs=

BC = 'x'
#  ^ fg=#8ec07c fs=
#    ^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

x = ABC
# ^ fg=#8ec07c fs=
#   ^^^ fg=#fabd2f fs=

x = "_\x00_\xaa_\'_%s_"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^^^ fg=#fb4934 fs=
#         ^ fg=#b8bb26 fs=
#          ^^^^ fg=#fb4934 fs=
#              ^ fg=#b8bb26 fs=
#               ^^ fg=#fb4934 fs=
#                 ^ fg=#b8bb26 fs=
#                  ^^ fg=#8ec07c fs=
#                    ^ fg=#b8bb26 fs=
#                     ^ fg=#fbf1c7 fs=

x = '_\m_\\m_'
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#fbf1c7 bg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
#        ^^ fg=#fb4934 fs=
#          ^^ fg=#b8bb26 fs=
#            ^ fg=#fbf1c7 fs=

x = b'x'
# ^ fg=#8ec07c fs=
#   ^ fg=#fb4934 fs=
#    ^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

'ab'.upper()
# ^ fg=#b8bb26 fs=
#  ^^ fg=#fbf1c7 fs=
#    ^^^^^ fg=#8ec07c fs=
#         ^^ fg=#fbf1c7 fs=

x = '|'.join(sorted(x))
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#fbf1c7 fs=
#       ^^^^ fg=#8ec07c fs=
#           ^ fg=#fbf1c7 fs=
#            ^^^^^^ fg=#8ec07c fs=
#                  ^^^^ fg=#fbf1c7 fs=

x = f"{x}"
# ^ fg=#8ec07c fs=
#   ^ fg=#fb4934 fs=
#    ^^^^^ fg=#fbf1c7 fs=

def x():
# ^ fg=#8ec07c fs=
#   ^ fg=#b8bb26 fs=
#    ^^^ fg=#fbf1c7 fs=

    pass
#   ^^^^ fg=#fb4934 fs=

def x():
    """x"""
#   ^^^^^^^ fg=#928374 fs=italic

    pass

def x():
    """
#   ^^^ fg=#928374 fs=italic

    x
#   ^ fg=#928374 fs=italic

    """
#   ^^^ fg=#928374 fs=italic

#   pass

def x():
# ^ fg=#8ec07c fs=
#   ^ fg=#b8bb26 fs=
#    ^^^ fg=#fbf1c7 fs=

    abc = 'x'
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#         ^ fg=#fbf1c7 fs=
#          ^ fg=#b8bb26 fs=
#           ^ fg=#fbf1c7 fs=

    call(x, 'y', True, False)
#   ^^^^ fg=#8ec07c fs=
#       ^^^ fg=#fbf1c7 fs=
#           ^ fg=#fbf1c7 fs=
#            ^ fg=#b8bb26 fs=
#             ^^ fg=#fbf1c7 fs=
#                ^^^^ fg=#d3869b fs=
#                    ^ fg=#fbf1c7 fs=
#                      ^^^^^ fg=#d3869b fs=
#                           ^ fg=#fbf1c7 fs=

    call(x=y)
#   ^^^^ fg=#8ec07c fs=
#       ^^ fg=#fbf1c7 fs=
#         ^ fg=#8ec07c fs=
#          ^^ fg=#fbf1c7 fs=

    if isinstance(var, list):
#   ^^ fg=#fb4934 fs=
#      ^^^^^^^^^^ fg=#8ec07c fs=
#                ^^^^^ fg=#fbf1c7 fs=
#                      ^^^^ fg=#fabd2f fs=
#                          ^^ fg=#fbf1c7 fs=

        arr = []
#       ^^^ fg=#fbf1c7 fs=
#           ^ fg=#8ec07c fs=
#             ^^ fg=#fbf1c7 fs=

        arr.append('x')
#       ^^^^ fg=#fbf1c7 fs=
#           ^^^^^^ fg=#8ec07c fs=
#                 ^^ fg=#fbf1c7 fs=
#                   ^ fg=#b8bb26 fs=
#                    ^^ fg=#fbf1c7 fs=

        arr.sort()
#       ^^^^ fg=#fbf1c7 fs=
#           ^^^^ fg=#8ec07c fs=
#               ^^ fg=#fbf1c7 fs=

        if len(x):
#       ^^ fg=#fb4934 fs=
#          ^^^ fg=#8ec07c fs=
#             ^^^^ fg=#fbf1c7 fs=

            print('Hi')
#           ^^^^^ fg=#8ec07c fs=
#                ^^ fg=#fbf1c7 fs=
#                  ^^ fg=#b8bb26 fs=
#                    ^^ fg=#fbf1c7 fs=

    fmt = 'x={}'.format(s['y'])
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#         ^ fg=#fbf1c7 fs=
#          ^^ fg=#b8bb26 fs=
#            ^^^^ fg=#fbf1c7 fs=
#                ^^^^^^ fg=#8ec07c fs=
#                      ^^^^ fg=#fbf1c7 fs=
#                          ^ fg=#b8bb26 fs=
#                           ^^^ fg=#fbf1c7 fs=

    x = u'x%s' % y
#   ^ fg=#fbf1c7 fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#fb4934 fs=
#        ^ fg=#fbf1c7 fs=
#         ^ fg=#b8bb26 fs=
#          ^^ fg=#8ec07c fs=
#            ^ fg=#fbf1c7 fs=
#              ^ fg=#8ec07c fs=
#                ^ fg=#fbf1c7 fs=

    x = "x {y} z".format(y=z)
#   ^ fg=#fbf1c7 fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#fbf1c7 fs=
#        ^ fg=#b8bb26 fs=
#          ^ fg=#fbf1c7 fs=
#           ^ fg=#8ec07c fs=
#            ^ fg=#fbf1c7 fs=
#              ^ fg=#b8bb26 fs=
#               ^^ fg=#fbf1c7 fs=
#                 ^^^^^^ fg=#8ec07c fs=
#                       ^^ fg=#fbf1c7 fs=
#                         ^ fg=#8ec07c fs=
#                          ^^ fg=#fbf1c7 fs=

    x = re.match('^.+\\.x$')
#   ^ fg=#fbf1c7 fs=
#     ^ fg=#8ec07c fs=
#       ^^^ fg=#fbf1c7 fs=
#          ^^^^^ fg=#8ec07c fs=
#               ^^ fg=#fbf1c7 fs=
#                 ^^^ fg=#b8bb26 fs=
#                    ^^ fg=#fb4934 fs=
#                      ^^^ fg=#b8bb26 fs=
#                         ^^ fg=#fbf1c7 fs=

@requires_x
# ^^^^^^^^^ fg=#83a598 fs=

def f_name(arg1='', arg2=0):
# ^ fg=#8ec07c fs=
#   ^^^^^^ fg=#b8bb26 fs=
#         ^^^^^ fg=#fbf1c7 fs=
#              ^ fg=#8ec07c fs=
#               ^^^ fg=#fbf1c7 fs=
#                   ^^^^ fg=#fbf1c7 fs=
#                       ^ fg=#8ec07c fs=
#                        ^ fg=#d3869b fs=
#                         ^^ fg=#fbf1c7 fs=

    if a > b: # x
#   ^^ fg=#fb4934 fs=
#      ^ fg=#fbf1c7 fs=
#        ^ fg=#8ec07c fs=
#          ^^ fg=#fbf1c7 fs=
#             ^ fg=#928374 fs=italic
#               ^ fg=#928374 fs=italic

        print 'a\'b'
#       ^^^^^ fg=#fb4934 fs=
#             ^ fg=#fbf1c7 fs=
#              ^ fg=#b8bb26 fs=
#               ^^ fg=#fb4934 fs=
#                 ^ fg=#b8bb26 fs=
#                  ^ fg=#fbf1c7 fs=

    abc = d[0]
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#         ^^ fg=#fbf1c7 fs=
#           ^ fg=#d3869b fs=
#            ^ fg=#fbf1c7 fs=

    abc.d(e)
#   ^^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#        ^^^ fg=#fbf1c7 fs=

    return None
#   ^^^^^^ fg=#fb4934 fs=
#          ^^^^ fg=#d3869b fs=

class X():
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#      ^^^ fg=#fbf1c7 fs=

    pass
#   ^^^^ fg=#fb4934 fs=

class X(Y):
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#      ^ fg=#fbf1c7 fs=
#       ^ fg=#fabd2f fs=
#        ^^ fg=#fbf1c7 fs=

    def __init__(self):
#   ^^^ fg=#8ec07c fs=
#       ^^^^^^^^ fg=#8ec07c fs=
#               ^^^^^^^ fg=#fbf1c7 fs=

        self.x = 123
#       ^^^^ fg=#d3869b fs=
#           ^^ fg=#fbf1c7 fs=
#              ^ fg=#8ec07c fs=
#                ^^^ fg=#d3869b fs=

        self.x()
#       ^^^^ fg=#d3869b fs=
#           ^ fg=#fbf1c7 fs=
#            ^ fg=#8ec07c fs=
#             ^^ fg=#fbf1c7 fs=

        self.x.y()
#       ^^^^ fg=#d3869b fs=
#           ^^^ fg=#fbf1c7 fs=
#              ^ fg=#8ec07c fs=
#               ^^ fg=#fbf1c7 fs=

        abc(y)
#       ^^^ fg=#8ec07c fs=
#          ^^^ fg=#fbf1c7 fs=

    def __str__(self)
#   ^^^ fg=#8ec07c fs=
#       ^^^^^^^ fg=#8ec07c fs=
#              ^^^^^^ fg=#fbf1c7 fs=

        return 'x'
#       ^^^^^^ fg=#fb4934 fs=
#              ^ fg=#fbf1c7 fs=
#               ^ fg=#b8bb26 fs=
#                ^ fg=#fbf1c7 fs=

    def z(self, a, b):
#   ^^^ fg=#8ec07c fs=
#       ^ fg=#b8bb26 fs=
#        ^^^^^^ fg=#fbf1c7 fs=
#               ^^ fg=#fbf1c7 fs=
#                  ^^^ fg=#fbf1c7 fs=

        if a == b:
#       ^^ fg=#fb4934 fs=
#          ^ fg=#fbf1c7 fs=
#            ^^ fg=#8ec07c fs=
#               ^^ fg=#fbf1c7 fs=

            if fcall(a, b):
#           ^^ fg=#fb4934 fs=
#              ^^^^^ fg=#8ec07c fs=
#                   ^^^ fg=#fbf1c7 fs=
#                       ^^^ fg=#fbf1c7 fs=

                return True
#               ^^^^^^ fg=#fb4934 fs=
#                      ^^^^ fg=#d3869b fs=

        return None
#       ^^^^^^ fg=#fb4934 fs=
#              ^^^^ fg=#d3869b fs=

    @zyx
#   ^ fg=#fbf1c7 fs=
#    ^^^ fg=#83a598 fs=

    def x(self):
        pass
#       ^^^^ fg=#fb4934 fs=

>>> msg = '''interpreter
# ^ fg=#8ec07c fs=
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#         ^^^ fg=#fbf1c7 fs=
#            ^^^^^^^^^^^ fg=#b8bb26 fs=

... prompt'''
# ^ fg=#b8bb26 fs=
#   ^^^^^^ fg=#b8bb26 fs=
#         ^^^ fg=#fbf1c7 fs=
