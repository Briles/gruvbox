// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "C"

        // This indented comment is to the preceding whitespace.
//      ^^ fg=#928374 fs=italic
//         ^^^^ fg=#928374 fs=italic
//              ^^^^^^^^ fg=#928374 fs=italic
//                       ^^^^^^^ fg=#928374 fs=italic
//                               ^^ fg=#928374 fs=italic
//                                  ^^ fg=#928374 fs=italic
//                                     ^^^ fg=#928374 fs=italic
//                                         ^^^^^^^^^ fg=#928374 fs=italic
//                                                   ^^^^^^^^^^^ fg=#928374 fs=italic

    // x
//  ^^ fg=#928374 fs=italic
//     ^ fg=#928374 fs=italic

#include <windows.h>
// ^^^^^ fg=#fb4934 fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^^^^^ fg=#b8bb26 fs=
//                 ^ fg=#ebdbb2 fs=

#define UNICODE
// ^^^^ fg=#fb4934 fs=
//      ^^^^^^^ fg=#fabd2f fs=

#define CONST0 1 // x
// ^^^^ fg=#fb4934 fs=
//      ^^^^^^ fg=#fabd2f fs=
//             ^ fg=#d3869b fs=
//               ^^ fg=#928374 fs=italic
//                  ^ fg=#928374 fs=italic

bool x = true;
// ^ fg=#fb4934 fs=
//   ^ fg=#ebdbb2 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=

int x() {}
//  ^ fg=#b8bb26 fs=
//   ^^ fg=#ebdbb2 fs=
//      ^^ fg=#ebdbb2 fs=

typedef int myint;
// ^^^^ fg=#fb4934 fs=
//      ^^^ fg=#fb4934 fs=
//          ^^^^^ fg=#fabd2f fs=
//               ^ fg=#ebdbb2 fs=

typedef struct mystruct {
// ^^^^ fg=#fb4934 fs=
//      ^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^ fg=#ebdbb2 fs=
//                      ^ fg=#ebdbb2 fs=

    } mystruct;
//  ^ fg=#ebdbb2 fs=
//    ^^^^^^^^ fg=#fabd2f fs=
//            ^ fg=#ebdbb2 fs=

struct point
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#b8bb26 fs=

{
    int x;
//  ^^^ fg=#fb4934 fs=
//      ^^ fg=#ebdbb2 fs=

    int y;
//  ^^^ fg=#fb4934 fs=
//      ^^ fg=#ebdbb2 fs=

}

struct foo **alloc_foo();
// ^^^ fg=#fb4934 fs=
//     ^^^ fg=#ebdbb2 fs=
//         ^^ fg=#8ec07c fs=
//           ^^^^^^^^^ fg=#b8bb26 fs=
//                    ^^^ fg=#ebdbb2 fs=

scanf("%ms %as %*[, ]", &buf);
// ^^ fg=#8ec07c fs=
//   ^ fg=#bdae93 fs=
//    ^ fg=#ebdbb2 fs=
//     ^^^ fg=#8ec07c fs=
//         ^^^ fg=#8ec07c fs=
//             ^^^^ fg=#8ec07c fs=
//                  ^ fg=#8ec07c fs=
//                   ^^ fg=#ebdbb2 fs=
//                      ^ fg=#8ec07c fs=
//                       ^^^ fg=#ebdbb2 fs=
//                          ^ fg=#bdae93 fs=
//                           ^ fg=#ebdbb2 fs=

int main(int argc, char **argv) {
//  ^^^^ fg=#b8bb26 fs=
//      ^ fg=#ebdbb2 fs=
//       ^^^ fg=#fb4934 fs=
//           ^^^^^ fg=#ebdbb2 fs=
//                 ^^^^ fg=#fb4934 fs=
//                      ^^ fg=#8ec07c fs=
//                        ^^^^^ fg=#ebdbb2 fs=
//                              ^ fg=#ebdbb2 fs=

    int speed = 0, speed1 = 0, speed2 = 0;
//  ^^^ fg=#fb4934 fs=
//      ^^^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^^^^^ fg=#ebdbb2 fs=
//                        ^ fg=#8ec07c fs=
//                          ^ fg=#d3869b fs=
//                           ^ fg=#ebdbb2 fs=
//                             ^^^^^^ fg=#ebdbb2 fs=
//                                    ^ fg=#8ec07c fs=
//                                      ^ fg=#d3869b fs=
//                                       ^ fg=#ebdbb2 fs=

    printf("Set Mouse Speed by Maverick\n");
//  ^^^^^^ fg=#8ec07c fs=
//        ^ fg=#bdae93 fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^ fg=#b8bb26 fs=
//              ^^^^^ fg=#b8bb26 fs=
//                    ^^^^^ fg=#b8bb26 fs=
//                          ^^ fg=#b8bb26 fs=
//                             ^^^^^^^^ fg=#b8bb26 fs=
//                                     ^^ fg=#fb4934 fs=
//                                       ^ fg=#ebdbb2 fs=
//                                        ^ fg=#bdae93 fs=
//                                         ^ fg=#ebdbb2 fs=

    SystemParametersInfo(SPI_GETMOUSESPEED, 0, &speed, 0);
//  ^^^^^^^^^^^^^^^^^^^^ fg=#8ec07c fs=
//                      ^ fg=#bdae93 fs=
//                       ^^^^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=
//                                          ^ fg=#d3869b fs=
//                                           ^ fg=#ebdbb2 fs=
//                                             ^ fg=#8ec07c fs=
//                                              ^^^^^^ fg=#ebdbb2 fs=
//                                                     ^ fg=#d3869b fs=
//                                                      ^ fg=#bdae93 fs=
//                                                       ^ fg=#ebdbb2 fs=

    printf("Current speed: %2d\n", speed);
//  ^^^^^^ fg=#8ec07c fs=
//        ^ fg=#bdae93 fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^^^^^ fg=#b8bb26 fs=
//                  ^^^^^^ fg=#b8bb26 fs=
//                         ^^^ fg=#8ec07c fs=
//                            ^^ fg=#fb4934 fs=
//                              ^^ fg=#ebdbb2 fs=
//                                 ^^^^^ fg=#ebdbb2 fs=
//                                      ^ fg=#bdae93 fs=
//                                       ^ fg=#ebdbb2 fs=

    if (argc == 1) return 0;
//  ^^ fg=#fb4934 fs=
//     ^^^^^ fg=#ebdbb2 fs=
//           ^^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^^^^^ fg=#fb4934 fs=
//                        ^ fg=#d3869b fs=
//                         ^ fg=#ebdbb2 fs=

    if (argc >= 2) sscanf(argv[1], "%d", &speed1);
//  ^^ fg=#fb4934 fs=
//     ^^^^^ fg=#ebdbb2 fs=
//           ^^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^^^^^ fg=#8ec07c fs=
//                       ^ fg=#bdae93 fs=
//                        ^^^^^ fg=#ebdbb2 fs=
//                             ^ fg=#d3869b fs=
//                              ^^ fg=#ebdbb2 fs=
//                                 ^ fg=#ebdbb2 fs=
//                                  ^^ fg=#8ec07c fs=
//                                    ^^ fg=#ebdbb2 fs=
//                                       ^ fg=#8ec07c fs=
//                                        ^^^^^^ fg=#ebdbb2 fs=
//                                              ^ fg=#bdae93 fs=
//                                               ^ fg=#ebdbb2 fs=

    if (argc >= 3) sscanf(argv[2], "%d", &speed2);
//  ^^ fg=#fb4934 fs=
//     ^^^^^ fg=#ebdbb2 fs=
//           ^^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^^^^^ fg=#8ec07c fs=
//                       ^ fg=#bdae93 fs=
//                        ^^^^^ fg=#ebdbb2 fs=
//                             ^ fg=#d3869b fs=
//                              ^^ fg=#ebdbb2 fs=
//                                 ^ fg=#ebdbb2 fs=
//                                  ^^ fg=#8ec07c fs=
//                                    ^^ fg=#ebdbb2 fs=
//                                       ^ fg=#8ec07c fs=
//                                        ^^^^^^ fg=#ebdbb2 fs=
//                                              ^ fg=#bdae93 fs=
//                                               ^ fg=#ebdbb2 fs=

    if (argc == 2) // set speed to first value
//  ^^ fg=#fb4934 fs=
//     ^^^^^ fg=#ebdbb2 fs=
//           ^^ fg=#8ec07c fs=
//              ^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^ fg=#928374 fs=italic
//                    ^^^ fg=#928374 fs=italic
//                        ^^^^^ fg=#928374 fs=italic
//                              ^^ fg=#928374 fs=italic
//                                 ^^^^^ fg=#928374 fs=italic
//                                       ^^^^^ fg=#928374 fs=italic

        speed = speed1;
//      ^^^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^^^^^^^ fg=#ebdbb2 fs=

    else if (speed == speed1 || speed == speed2) // alternate
//  ^^^^ fg=#fb4934 fs=
//       ^^ fg=#fb4934 fs=
//          ^^^^^^ fg=#ebdbb2 fs=
//                 ^^ fg=#8ec07c fs=
//                    ^^^^^^ fg=#ebdbb2 fs=
//                           ^^ fg=#8ec07c fs=
//                              ^^^^^ fg=#ebdbb2 fs=
//                                    ^^ fg=#8ec07c fs=
//                                       ^^^^^^^ fg=#ebdbb2 fs=
//                                               ^^ fg=#928374 fs=italic
//                                                  ^^^^^^^^^ fg=#928374 fs=italic

        speed = speed1 + speed2 - speed;
//      ^^^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^^^^^^ fg=#ebdbb2 fs=
//                     ^ fg=#8ec07c fs=
//                       ^^^^^^ fg=#ebdbb2 fs=
//                              ^ fg=#8ec07c fs=
//                                ^^^^^^ fg=#ebdbb2 fs=

    else
//  ^^^^ fg=#fb4934 fs=

        speed = speed1;  // start with first value
//      ^^^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^^^^^^^ fg=#ebdbb2 fs=
//                       ^^ fg=#928374 fs=italic
//                          ^^^^^ fg=#928374 fs=italic
//                                ^^^^ fg=#928374 fs=italic
//                                     ^^^^^ fg=#928374 fs=italic
//                                           ^^^^^ fg=#928374 fs=italic

    SystemParametersInfo(SPI_SETMOUSESPEED, 0,  speed, 0);
//  ^^^^^^^^^^^^^^^^^^^^ fg=#8ec07c fs=
//                      ^ fg=#bdae93 fs=
//                       ^^^^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=
//                                          ^ fg=#d3869b fs=
//                                           ^ fg=#ebdbb2 fs=
//                                              ^^^^^^ fg=#ebdbb2 fs=
//                                                     ^ fg=#d3869b fs=
//                                                      ^ fg=#bdae93 fs=
//                                                       ^ fg=#ebdbb2 fs=

    SystemParametersInfo(SPI_GETMOUSESPEED, 0, &speed, 0);
//  ^^^^^^^^^^^^^^^^^^^^ fg=#8ec07c fs=
//                      ^ fg=#bdae93 fs=
//                       ^^^^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=
//                                          ^ fg=#d3869b fs=
//                                           ^ fg=#ebdbb2 fs=
//                                             ^ fg=#8ec07c fs=
//                                              ^^^^^^ fg=#ebdbb2 fs=
//                                                     ^ fg=#d3869b fs=
//                                                      ^ fg=#bdae93 fs=
//                                                       ^ fg=#ebdbb2 fs=

    printf("New speed: %2d\n", speed);
//  ^^^^^^ fg=#8ec07c fs=
//        ^ fg=#bdae93 fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^ fg=#b8bb26 fs=
//              ^^^^^^ fg=#b8bb26 fs=
//                     ^^^ fg=#8ec07c fs=
//                        ^^ fg=#fb4934 fs=
//                          ^^ fg=#ebdbb2 fs=
//                             ^^^^^ fg=#ebdbb2 fs=
//                                  ^ fg=#bdae93 fs=
//                                   ^ fg=#ebdbb2 fs=

    return 0;
//  ^^^^^^ fg=#fb4934 fs=
//         ^ fg=#d3869b fs=
//          ^ fg=#ebdbb2 fs=
}

int foo(int a, float b[])
//  ^^^ fg=#b8bb26 fs=
//     ^ fg=#ebdbb2 fs=
//      ^^^ fg=#fb4934 fs=
//          ^^ fg=#ebdbb2 fs=
//             ^^^^^ fg=#fb4934 fs=
//                   ^^^^ fg=#ebdbb2 fs=

{
    myClass *result;
//  ^^^^^^^ fg=#ebdbb2 fs=
//          ^ fg=#8ec07c fs=
//           ^^^^^^^ fg=#ebdbb2 fs=

    result->kk = func(val);
//  ^^^^^^^^^^ fg=#ebdbb2 fs=
//             ^ fg=#8ec07c fs=
//               ^^^^ fg=#8ec07c fs=
//                   ^ fg=#bdae93 fs=
//                    ^^^ fg=#ebdbb2 fs=
//                       ^ fg=#bdae93 fs=
//                        ^ fg=#ebdbb2 fs=

    if (result == 0) {
//  ^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#ebdbb2 fs=
//             ^^ fg=#8ec07c fs=
//                ^ fg=#d3869b fs=
//                 ^ fg=#ebdbb2 fs=
//                   ^ fg=#ebdbb2 fs=

        return 0;
//      ^^^^^^ fg=#fb4934 fs=
//             ^ fg=#d3869b fs=
//              ^ fg=#ebdbb2 fs=

#if CROSS_SCOPE_MACRO
//  ^^^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=
    } else if (result > 0) {
//  ^ fg=#ebdbb2 fs=
//    ^^^^ fg=#fb4934 fs=
//         ^^ fg=#fb4934 fs=
//            ^^^^^^^ fg=#ebdbb2 fs=
//                    ^ fg=#8ec07c fs=
//                      ^ fg=#d3869b fs=
//                       ^ fg=#ebdbb2 fs=
//                         ^ fg=#ebdbb2 fs=
        return 1;
//      ^^^^^^ fg=#fb4934 fs=
//             ^ fg=#d3869b fs=
//              ^ fg=#ebdbb2 fs=
#endif
// ^^^ fg=#fb4934 fs=
    }
}
