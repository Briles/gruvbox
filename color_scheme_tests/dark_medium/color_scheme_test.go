// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).tmTheme" "Go"

package examples
// ^^^^ fg=#fb4934 fs=
//      ^^^^^^^^ fg=#83a598 fs=

import (
// ^^^ fg=#fb4934 fs=
//     ^ fg=#fbf1c7 fs=

    "fmt"
//  ^ fg=#fbf1c7 fs=
//   ^^^ fg=#b8bb26 fs=
//      ^ fg=#fbf1c7 fs=

    )

import "ab"
// ^^^ fg=#fb4934 fs=
//     ^ fg=#fbf1c7 fs=
//      ^^ fg=#b8bb26 fs=
//        ^ fg=#fbf1c7 fs=

var valid int = 0
//  ^^^^^ fg=#83a598 fs=
//        ^^^ fg=#fabd2f fs=
//            ^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=

var var1, var2, var3
//  ^^^^ fg=#83a598 fs=
//      ^ fg=#fbf1c7 fs=
//        ^^^^ fg=#83a598 fs=
//            ^ fg=#fbf1c7 fs=
//              ^^^^ fg=#83a598 fs=

var1 := 1
// ^ fg=#83a598 fs=
//   ^^ fg=#8ec07c fs=
//      ^ fg=#d3869b fs=

var1, var2 := imported.Vals
// ^ fg=#83a598 fs=
//  ^ fg=#fbf1c7 fs=
//    ^^^^ fg=#83a598 fs=
//         ^^ fg=#8ec07c fs=
//            ^^^^^^^^ fg=#83a598 fs=
//                    ^ fg=#fbf1c7 fs=
//                     ^^^^ fg=#83a598 fs=

type myStruct struct {
// ^ fg=#fb4934 fs=
//   ^^^^^^^^ fg=#fabd2f fs=
//            ^^^^^^ fg=#fb4934 fs=
//                   ^ fg=#fbf1c7 fs=

    FirstFunc   func(arg string)
//  ^^^^^^^^^ fg=#83a598 fs=
//              ^^^^ fg=#fb4934 fs=
//                  ^^^^ fg=#fbf1c7 fs=
//                       ^^^^^^ fg=#fabd2f fs=
//                             ^ fg=#fbf1c7 fs=

    SecondFunc  func(arg interface{})
//  ^^^^^^^^^^ fg=#83a598 fs=
//              ^^^^ fg=#fb4934 fs=
//                  ^^^^ fg=#fbf1c7 fs=
//                       ^^^^^^^^^ fg=#fb4934 fs=
//                                ^^^ fg=#fbf1c7 fs=

}

const (
// ^^ fg=#fb4934 fs=
//    ^ fg=#fbf1c7 fs=

    graveAccentString = `hi %s and %[1]s`
//  ^^^^^^^^^^^^^^^^^ fg=#fabd2f fs=
//                    ^ fg=#8ec07c fs=
//                      ^ fg=#fbf1c7 fs=
//                       ^^ fg=#b8bb26 fs=
//                          ^^ fg=#8ec07c fs=
//                             ^^^ fg=#b8bb26 fs=
//                                 ^^^^^ fg=#8ec07c fs=
//                                      ^ fg=#fbf1c7 fs=

    normalString = "hi %q and %[1]s"
//  ^^^^^^^^^^^^ fg=#fabd2f fs=
//               ^ fg=#8ec07c fs=
//                 ^ fg=#fbf1c7 fs=
//                  ^^ fg=#b8bb26 fs=
//                     ^^ fg=#8ec07c fs=
//                        ^^^ fg=#b8bb26 fs=
//                            ^^^^^ fg=#8ec07c fs=
//                                 ^ fg=#fbf1c7 fs=

    dynamicFieldWidths = "abc %[1]*.[2]*f %*.*f"
//  ^^^^^^^^^^^^^^^^^^ fg=#fabd2f fs=
//                     ^ fg=#8ec07c fs=
//                       ^ fg=#fbf1c7 fs=
//                        ^^^ fg=#b8bb26 fs=
//                            ^^^^^^^^^^^ fg=#b8bb26 fs=
//                                        ^^^^^ fg=#b8bb26 fs=
//                                             ^ fg=#fbf1c7 fs=

)

func () {
// ^ fg=#fb4934 fs=
//   ^^ fg=#fbf1c7 fs=
//      ^ fg=#fbf1c7 fs=

    Label:
//  ^^^^^ fg=#83a598 fs=
//       ^ fg=#fbf1c7 fs=

}
