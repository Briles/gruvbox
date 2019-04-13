<?php // COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "PHP"

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

declare(strict_types=1);
// ^^^^ fg=#fb4934 fs=
//     ^ fg=#ebdbb2 fs=
//      ^^^^^^^^^^^^ fg=#d3869b fs=
//                  ^ fg=#8ec07c fs=
//                   ^ fg=#d3869b fs=
//                    ^^ fg=#ebdbb2 fs=

namespace A;
// ^^^^^^ fg=#fb4934 fs=
//        ^ fg=#b8bb26 fs=
//         ^ fg=#ebdbb2 fs=

namespace A\B\C;
// ^^^^^^ fg=#fb4934 fs=
//        ^ fg=#fabd2f fs=
//         ^ fg=#ebdbb2 fs=
//          ^ fg=#fabd2f fs=
//           ^ fg=#ebdbb2 fs=
//            ^ fg=#b8bb26 fs=
//             ^ fg=#ebdbb2 fs=

use A;
//  ^ fg=#fabd2f fs=
//   ^ fg=#ebdbb2 fs=

use A\B\C;
//  ^ fg=#fabd2f fs=
//   ^ fg=#ebdbb2 fs=
//    ^ fg=#fabd2f fs=
//     ^ fg=#ebdbb2 fs=
//      ^ fg=#fabd2f fs=
//       ^ fg=#ebdbb2 fs=

use A\B\C as B;
//  ^ fg=#fabd2f fs=
//   ^ fg=#ebdbb2 fs=
//    ^ fg=#fabd2f fs=
//     ^ fg=#ebdbb2 fs=
//      ^ fg=#fabd2f fs=
//        ^^ fg=#fb4934 fs=
//           ^ fg=#fabd2f fs=
//            ^ fg=#ebdbb2 fs=

use function a;
//  ^^^^^^^^ fg=#fb4934 fs=
//           ^ fg=#8ec07c fs=
//            ^ fg=#ebdbb2 fs=

use function a\b\c;
//  ^^^^^^^^ fg=#fb4934 fs=
//           ^ fg=#fabd2f fs=
//            ^ fg=#ebdbb2 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#8ec07c fs=
//                ^ fg=#ebdbb2 fs=

use function a\b\c as b;
//  ^^^^^^^^ fg=#fb4934 fs=
//           ^ fg=#fabd2f fs=
//            ^ fg=#ebdbb2 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#8ec07c fs=
//                 ^^ fg=#fb4934 fs=
//                    ^ fg=#b8bb26 fs=
//                     ^ fg=#ebdbb2 fs=

use const A;
//  ^^^^^ fg=#fb4934 fs=
//        ^ fg=#d3869b fs=
//         ^ fg=#ebdbb2 fs=

use const A\B\C;
//  ^^^^^ fg=#fb4934 fs=
//        ^ fg=#fabd2f fs=
//         ^ fg=#ebdbb2 fs=
//          ^ fg=#fabd2f fs=
//           ^ fg=#ebdbb2 fs=
//            ^ fg=#d3869b fs=
//             ^ fg=#ebdbb2 fs=

use const A\B\C as X;
//  ^^^^^ fg=#fb4934 fs=
//        ^ fg=#fabd2f fs=
//         ^ fg=#ebdbb2 fs=
//          ^ fg=#fabd2f fs=
//           ^ fg=#ebdbb2 fs=
//            ^ fg=#d3869b fs=
//              ^^ fg=#fb4934 fs=
//                 ^ fg=#d3869b fs=
//                  ^ fg=#ebdbb2 fs=

const B = 1;
// ^^ fg=#fb4934 fs=
//    ^ fg=#d3869b fs=
//      ^ fg=#8ec07c fs=
//        ^ fg=#d3869b fs=
//         ^ fg=#ebdbb2 fs=

require_once 'x.y';
// ^^^^^^^^^ fg=#fb4934 fs=
//           ^ fg=#ebdbb2 fs=
//            ^^^ fg=#b8bb26 fs=
//               ^^ fg=#ebdbb2 fs=

function x() {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^ fg=#ebdbb2 fs=
//           ^^ fg=#ebdbb2 fs=

interface x {}
// ^^^^^^ fg=#fb4934 fs=
//        ^ fg=#b8bb26 fs=
//          ^^ fg=#ebdbb2 fs=

trait x {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#b8bb26 fs=
//      ^^ fg=#ebdbb2 fs=

class x {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^ fg=#ebdbb2 fs=

final class x {}
// ^^ fg=#fb4934 fs=
//    ^^^^^ fg=#fb4934 fs=
//          ^ fg=#fabd2f fs=
//            ^^ fg=#ebdbb2 fs=

abstract class x {}
// ^^^^^ fg=#fb4934 fs=
//       ^^^^^ fg=#fb4934 fs=
//             ^ fg=#fabd2f fs=
//               ^^ fg=#ebdbb2 fs=

class x extends y {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^^^^^^ fg=#fb4934 fs=
//              ^ fg=#fabd2f fs=
//                ^^ fg=#ebdbb2 fs=

class x implements y {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^^^^^^^^^ fg=#fb4934 fs=
//                 ^ fg=#fabd2f fs=
//                   ^^ fg=#ebdbb2 fs=

class x extends y implements z {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^^^^^^ fg=#fb4934 fs=
//              ^ fg=#fabd2f fs=
//                ^^^^^^^^^^ fg=#fb4934 fs=
//                           ^ fg=#fabd2f fs=
//                             ^^ fg=#ebdbb2 fs=

class x extends stdClass implements Countable {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^^^^^^ fg=#fb4934 fs=
//              ^^^^^^^^ fg=#fabd2f fs=
//                       ^^^^^^^^^^ fg=#fb4934 fs=
//                                  ^^^^^^^^^ fg=#fabd2f fs=
//                                            ^^ fg=#ebdbb2 fs=

class x extends /* */ \a\b implements \c\d {}
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
//      ^^^^^^^ fg=#fb4934 fs=
//              ^^ fg=#928374 fs=italic
//                 ^^ fg=#928374 fs=italic
//                    ^ fg=#ebdbb2 fs=
//                     ^ fg=#fabd2f fs=
//                      ^ fg=#ebdbb2 fs=
//                       ^ fg=#fabd2f fs=
//                         ^^^^^^^^^^ fg=#fb4934 fs=
//                                    ^ fg=#ebdbb2 fs=
//                                     ^ fg=#fabd2f fs=
//                                      ^ fg=#ebdbb2 fs=
//                                       ^ fg=#fabd2f fs=
//                                         ^^ fg=#ebdbb2 fs=

function d($a = array(), $b = "x") {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^^^^^ fg=#8ec07c fs=
//                   ^^^ fg=#ebdbb2 fs=
//                       ^^ fg=#ebdbb2 fs=
//                          ^ fg=#8ec07c fs=
//                            ^ fg=#ebdbb2 fs=
//                             ^ fg=#b8bb26 fs=
//                              ^^ fg=#ebdbb2 fs=
//                                 ^^ fg=#ebdbb2 fs=

function e($a = []) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^^ fg=#ebdbb2 fs=
//            ^ fg=#8ec07c fs=
//              ^^^ fg=#ebdbb2 fs=
//                  ^^ fg=#ebdbb2 fs=

function f(array $a = [], $b = "x") {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^^^^^ fg=#fb4934 fs=
//               ^^ fg=#ebdbb2 fs=
//                  ^ fg=#8ec07c fs=
//                    ^^^ fg=#ebdbb2 fs=
//                        ^^ fg=#ebdbb2 fs=
//                           ^ fg=#8ec07c fs=
//                             ^ fg=#ebdbb2 fs=
//                              ^ fg=#b8bb26 fs=
//                               ^^ fg=#ebdbb2 fs=
//                                  ^^ fg=#ebdbb2 fs=

function g(array $a = [1, 2, 3, 4],  $b = "x") {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^^^^^ fg=#fb4934 fs=
//               ^^ fg=#ebdbb2 fs=
//                  ^ fg=#8ec07c fs=
//                    ^ fg=#ebdbb2 fs=
//                     ^ fg=#d3869b fs=
//                      ^ fg=#ebdbb2 fs=
//                        ^ fg=#d3869b fs=
//                         ^ fg=#ebdbb2 fs=
//                           ^ fg=#d3869b fs=
//                            ^ fg=#ebdbb2 fs=
//                              ^ fg=#d3869b fs=
//                               ^^ fg=#ebdbb2 fs=
//                                   ^^ fg=#ebdbb2 fs=
//                                      ^ fg=#8ec07c fs=
//                                        ^ fg=#ebdbb2 fs=
//                                         ^ fg=#b8bb26 fs=
//                                          ^^ fg=#ebdbb2 fs=
//                                             ^^ fg=#ebdbb2 fs=

function h(array $a = null, $b = "x") {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^^^^^ fg=#fb4934 fs=
//               ^^ fg=#ebdbb2 fs=
//                  ^ fg=#8ec07c fs=
//                    ^^^^ fg=#d3869b fs=
//                        ^ fg=#ebdbb2 fs=
//                          ^^ fg=#ebdbb2 fs=
//                             ^ fg=#8ec07c fs=
//                               ^ fg=#ebdbb2 fs=
//                                ^ fg=#b8bb26 fs=
//                                 ^^ fg=#ebdbb2 fs=
//                                    ^^ fg=#ebdbb2 fs=

function i(&$x) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^ fg=#fb4934 fs=
//          ^^^ fg=#ebdbb2 fs=
//              ^^ fg=#ebdbb2 fs=

function j(X $c) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^ fg=#fabd2f fs=
//           ^^^ fg=#ebdbb2 fs=
//               ^^ fg=#ebdbb2 fs=

function k(Coutable $c) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^^^^^^^^ fg=#fabd2f fs=
//                  ^^^ fg=#ebdbb2 fs=
//                      ^^ fg=#ebdbb2 fs=

function l(int $a, string $b, bool $c, float $d) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//         ^^^ fg=#fb4934 fs=
//             ^^^ fg=#ebdbb2 fs=
//                 ^^^^^^ fg=#fb4934 fs=
//                        ^^^ fg=#ebdbb2 fs=
//                            ^^^^ fg=#fb4934 fs=
//                                 ^^^ fg=#ebdbb2 fs=
//                                     ^^^^^ fg=#fb4934 fs=
//                                           ^^^ fg=#ebdbb2 fs=
//                                               ^^ fg=#ebdbb2 fs=

function m(...$x) {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^^^^^^ fg=#ebdbb2 fs=
//                ^^ fg=#ebdbb2 fs=

function n(
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=

        $a,
//      ^^^ fg=#ebdbb2 fs=

        $b
//      ^^ fg=#ebdbb2 fs=

        ){}
//      ^^^ fg=#ebdbb2 fs=

function o(): X {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^^ fg=#ebdbb2 fs=
//            ^ fg=#fabd2f fs=
//              ^^ fg=#ebdbb2 fs=

function p(): Countable {}
// ^^^^^ fg=#8ec07c fs=
//       ^ fg=#b8bb26 fs=
//        ^^^ fg=#ebdbb2 fs=
//            ^^^^^^^^^ fg=#fabd2f fs=
//                      ^^ fg=#ebdbb2 fs=

$abc = function() {};
// ^ fg=#83a598 fs=
//   ^ fg=#8ec07c fs=
//     ^^^^^^^^ fg=#8ec07c fs=
//             ^^ fg=#ebdbb2 fs=
//                ^^^ fg=#ebdbb2 fs=

$x = function(N $c) use ($a, $b) {};
// ^ fg=#8ec07c fs=
//   ^^^^^^^^ fg=#8ec07c fs=
//           ^ fg=#ebdbb2 fs=
//            ^ fg=#fabd2f fs=
//              ^^^ fg=#ebdbb2 fs=
//                  ^^^ fg=#fb4934 fs=
//                      ^^^^ fg=#ebdbb2 fs=
//                           ^^^ fg=#ebdbb2 fs=
//                               ^^^ fg=#ebdbb2 fs=

$abc->y(function (A $a, B $b) {
// ^ fg=#83a598 fs=
//  ^^ fg=#ebdbb2 fs=
//    ^ fg=#689d6a fs=
//     ^ fg=#bdae93 fs=
//      ^^^^^^^^ fg=#8ec07c fs=
//               ^ fg=#bdae93 fs=
//                ^ fg=#fabd2f fs=
//                  ^^^ fg=#ebdbb2 fs=
//                      ^ fg=#fabd2f fs=
//                        ^^ fg=#ebdbb2 fs=
//                          ^ fg=#bdae93 fs=
//                            ^ fg=#ebdbb2 fs=
    $c = $a->b('c');
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#458588 fs=
//        ^ fg=#83a598 fs=
//         ^^ fg=#ebdbb2 fs=
//           ^ fg=#689d6a fs=
//            ^ fg=#bdae93 fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#b8bb26 fs=
//               ^ fg=#ebdbb2 fs=
//                ^ fg=#bdae93 fs=
//                 ^ fg=#ebdbb2 fs=

    $b->c("d $c");
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//    ^^ fg=#ebdbb2 fs=
//      ^ fg=#689d6a fs=
//       ^ fg=#bdae93 fs=
//        ^ fg=#ebdbb2 fs=
//         ^ fg=#b8bb26 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#bdae93 fs=
//               ^ fg=#ebdbb2 fs=

    });
//  ^ fg=#ebdbb2 fs=
//   ^ fg=#bdae93 fs=
//    ^ fg=#ebdbb2 fs=

if (isset($x) && is_callable($x)) {
// ^ fg=#ebdbb2 fs=
//  ^^^^^ fg=#8ec07c fs=
//       ^ fg=#bdae93 fs=
//        ^ fg=#458588 fs=
//         ^ fg=#83a598 fs=
//          ^ fg=#bdae93 fs=
//            ^^ fg=#8ec07c fs=
//               ^^^^^^^^^^^ fg=#8ec07c fs=
//                          ^ fg=#bdae93 fs=
//                           ^ fg=#458588 fs=
//                            ^ fg=#83a598 fs=
//                             ^ fg=#bdae93 fs=
//                              ^ fg=#ebdbb2 fs=
//                                ^ fg=#ebdbb2 fs=

    if ((29 - 10 + 2) * 2 > 4.2) {}
//  ^^ fg=#fb4934 fs=
//     ^^ fg=#ebdbb2 fs=
//       ^^ fg=#d3869b fs=
//          ^ fg=#8ec07c fs=
//            ^^ fg=#d3869b fs=
//               ^ fg=#8ec07c fs=
//                 ^ fg=#d3869b fs=
//                  ^ fg=#ebdbb2 fs=
//                    ^ fg=#8ec07c fs=
//                      ^ fg=#d3869b fs=
//                        ^ fg=#8ec07c fs=
//                          ^^^ fg=#d3869b fs=
//                             ^ fg=#ebdbb2 fs=
//                               ^^ fg=#ebdbb2 fs=

    $x = true | false | null;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^ fg=#d3869b fs=
//            ^ fg=#8ec07c fs=
//              ^^^^^ fg=#d3869b fs=
//                    ^ fg=#8ec07c fs=
//                      ^^^^ fg=#d3869b fs=
//                          ^ fg=#ebdbb2 fs=

    $x = 0123 & 0x1A && 0b11111111 / 1.2 + 1.2e3 + 7E-10;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^ fg=#d3869b fs=
//            ^ fg=#8ec07c fs=
//              ^^ fg=#b16286 fs=
//                ^^ fg=#d3869b fs=
//                   ^^ fg=#8ec07c fs=
//                      ^^ fg=#b16286 fs=
//                        ^^^^^^^^ fg=#d3869b fs=
//                                 ^ fg=#8ec07c fs=
//                                   ^^^ fg=#d3869b fs=
//                                       ^ fg=#8ec07c fs=
//                                         ^^^^^ fg=#d3869b fs=
//                                               ^ fg=#8ec07c fs=
//                                                 ^^^^^ fg=#d3869b fs=
//                                                      ^ fg=#ebdbb2 fs=

    print("a\t\nb" . 'ab');
//  ^^^^^ fg=#8ec07c fs=
//       ^^ fg=#ebdbb2 fs=
//         ^ fg=#b8bb26 fs=
//          ^^^^ fg=#fb4934 fs=
//              ^ fg=#b8bb26 fs=
//               ^ fg=#ebdbb2 fs=
//                 ^ fg=#8ec07c fs=
//                   ^ fg=#ebdbb2 fs=
//                    ^^ fg=#b8bb26 fs=
//                      ^^^ fg=#ebdbb2 fs=

    $x = "_\n_\\n_\m_\\m_";
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//         ^^ fg=#fb4934 fs=
//           ^ fg=#b8bb26 fs=
//            ^^ fg=#fb4934 fs=
//              ^^^^^ fg=#b8bb26 fs=
//                   ^^ fg=#fb4934 fs=
//                     ^^ fg=#b8bb26 fs=
//                       ^^ fg=#ebdbb2 fs=

    user_defined();
//  ^^^^^^^^^^^^ fg=#8ec07c fs=
//              ^^ fg=#bdae93 fs=
//                ^ fg=#ebdbb2 fs=

    phpversion();
//  ^^^^^^^^^^ fg=#8ec07c fs=
//            ^^ fg=#bdae93 fs=
//              ^ fg=#ebdbb2 fs=

    error_reporting(E_ALL);
//  ^^^^^^^^^^^^^^^ fg=#8ec07c fs=
//                 ^ fg=#bdae93 fs=
//                  ^^^^^ fg=#d3869b fs=
//                       ^ fg=#bdae93 fs=
//                        ^ fg=#ebdbb2 fs=

    $x();
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//    ^^ fg=#bdae93 fs=
//      ^ fg=#ebdbb2 fs=

    $x = $y($a, $b);
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#458588 fs=
//        ^ fg=#83a598 fs=
//         ^ fg=#bdae93 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=
//              ^ fg=#458588 fs=
//               ^ fg=#83a598 fs=
//                ^ fg=#bdae93 fs=
//                 ^ fg=#ebdbb2 fs=

    $x = array();
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^^ fg=#8ec07c fs=
//            ^^^ fg=#ebdbb2 fs=

    $x = [];
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^ fg=#ebdbb2 fs=

    $x = array(
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^^ fg=#8ec07c fs=
//            ^ fg=#ebdbb2 fs=

        "x" => "y",
//      ^ fg=#ebdbb2 fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//          ^^ fg=#8ec07c fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#b8bb26 fs=
//               ^^ fg=#ebdbb2 fs=

        [

            "x" => "y",
//          ^ fg=#ebdbb2 fs=
//           ^ fg=#b8bb26 fs=
//            ^ fg=#ebdbb2 fs=
//              ^^ fg=#8ec07c fs=
//                 ^ fg=#ebdbb2 fs=
//                  ^ fg=#b8bb26 fs=
//                   ^^ fg=#ebdbb2 fs=

        ]

    );

    $x = array_merge([
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^^^^^^^^ fg=#8ec07c fs=
//                  ^ fg=#bdae93 fs=
//                   ^ fg=#ebdbb2 fs=

        'a' => 'b',
//      ^ fg=#ebdbb2 fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//          ^^ fg=#8ec07c fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#b8bb26 fs=
//               ^^ fg=#ebdbb2 fs=

        'c' => 42
//      ^ fg=#ebdbb2 fs=
//       ^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=
//          ^^ fg=#8ec07c fs=
//             ^^ fg=#d3869b fs=

    ]);
//  ^ fg=#ebdbb2 fs=
//   ^ fg=#bdae93 fs=
//    ^ fg=#ebdbb2 fs=

        $argv['x']; $argc;
//      ^ fg=#458588 fs=
//       ^^^^ fg=#83a598 fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#b8bb26 fs=
//              ^^^ fg=#ebdbb2 fs=
//                  ^ fg=#458588 fs=
//                   ^^^^ fg=#83a598 fs=
//                       ^ fg=#ebdbb2 fs=

        $_FILES; $_ENV; $GLOBALS;
//      ^ fg=#458588 fs=
//       ^^^^^^ fg=#83a598 fs=
//             ^ fg=#ebdbb2 fs=
//               ^ fg=#458588 fs=
//                ^^^^ fg=#83a598 fs=
//                    ^ fg=#ebdbb2 fs=
//                      ^ fg=#458588 fs=
//                       ^^^^^^^ fg=#83a598 fs=
//                              ^ fg=#ebdbb2 fs=

        $_SERVER['DOCUMENT_ROOT'];
//      ^ fg=#458588 fs=
//       ^^^^^^^ fg=#83a598 fs=
//              ^^ fg=#ebdbb2 fs=
//                ^^^^^^^^^^^^^ fg=#b8bb26 fs=
//                             ^^^ fg=#ebdbb2 fs=

        $_GET['x']; $_POST['x']; $_COOKIE['x']; $_SESSION['x']; $_REQUEST['x'];
//      ^ fg=#458588 fs=
//       ^^^^ fg=#83a598 fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#b8bb26 fs=
//              ^^^ fg=#ebdbb2 fs=
//                  ^ fg=#458588 fs=
//                   ^^^^^ fg=#83a598 fs=
//                        ^^ fg=#ebdbb2 fs=
//                          ^ fg=#b8bb26 fs=
//                           ^^^ fg=#ebdbb2 fs=
//                               ^ fg=#458588 fs=
//                                ^^^^^^^ fg=#83a598 fs=
//                                       ^^ fg=#ebdbb2 fs=
//                                         ^ fg=#b8bb26 fs=
//                                          ^^^ fg=#ebdbb2 fs=
//                                              ^ fg=#458588 fs=
//                                               ^^^^^^^^ fg=#83a598 fs=
//                                                       ^^ fg=#ebdbb2 fs=
//                                                         ^ fg=#b8bb26 fs=
//                                                          ^^^ fg=#ebdbb2 fs=
//                                                              ^ fg=#458588 fs=
//                                                               ^^^^^^^^ fg=#83a598 fs=
//                                                                       ^^ fg=#ebdbb2 fs=
//                                                                         ^ fg=#b8bb26 fs=
//                                                                          ^^^ fg=#ebdbb2 fs=

    $x = __FILE__ . PHP_VERSION . XYZ;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^^^^^^ fg=#d3869b fs=
//                ^ fg=#8ec07c fs=
//                  ^^^^^^^^^^^ fg=#d3869b fs=
//                              ^ fg=#8ec07c fs=
//                                ^^^ fg=#d3869b fs=
//                                   ^ fg=#ebdbb2 fs=

    echo X[1];
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#d3869b fs=
//        ^ fg=#ebdbb2 fs=
//         ^ fg=#d3869b fs=
//          ^^ fg=#ebdbb2 fs=

    echo $var['x'][1];
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#458588 fs=
//        ^^^ fg=#83a598 fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#b8bb26 fs=
//              ^^^ fg=#ebdbb2 fs=
//                 ^ fg=#d3869b fs=
//                  ^^ fg=#ebdbb2 fs=

    $x = (int) (integer) $x;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^ fg=#fb4934 fs=
//           ^ fg=#ebdbb2 fs=
//             ^ fg=#ebdbb2 fs=
//              ^^^^^^^ fg=#fb4934 fs=
//                     ^ fg=#ebdbb2 fs=
//                       ^ fg=#458588 fs=
//                        ^ fg=#83a598 fs=
//                         ^ fg=#ebdbb2 fs=

    $x = (bool) (boolean) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^ fg=#fb4934 fs=
//            ^ fg=#ebdbb2 fs=
//              ^ fg=#ebdbb2 fs=
//               ^^^^^^^ fg=#fb4934 fs=
//                      ^ fg=#ebdbb2 fs=
//                        ^ fg=#458588 fs=
//                         ^ fg=#83a598 fs=
//                          ^ fg=#ebdbb2 fs=

    $x = (float) (double) (real) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=
//               ^ fg=#ebdbb2 fs=
//                ^^^^^^ fg=#fb4934 fs=
//                      ^ fg=#ebdbb2 fs=
//                        ^ fg=#ebdbb2 fs=
//                         ^^^^ fg=#fb4934 fs=
//                             ^ fg=#ebdbb2 fs=
//                               ^ fg=#458588 fs=
//                                ^ fg=#83a598 fs=
//                                 ^ fg=#ebdbb2 fs=

    $x = (string) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^^ fg=#fb4934 fs=
//              ^ fg=#ebdbb2 fs=
//                ^ fg=#458588 fs=
//                 ^ fg=#83a598 fs=
//                  ^ fg=#ebdbb2 fs=

    $x = (array) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=
//               ^ fg=#458588 fs=
//                ^ fg=#83a598 fs=
//                 ^ fg=#ebdbb2 fs=

    $x = (object) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^^ fg=#fb4934 fs=
//              ^ fg=#ebdbb2 fs=
//                ^ fg=#458588 fs=
//                 ^ fg=#83a598 fs=
//                  ^ fg=#ebdbb2 fs=

    $x = (unset) $y;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=
//               ^ fg=#458588 fs=
//                ^ fg=#83a598 fs=
//                 ^ fg=#ebdbb2 fs=

    $x = new stdClass();
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^ fg=#fb4934 fs=
//           ^^^^^^^^ fg=#fabd2f fs=
//                   ^^^ fg=#ebdbb2 fs=

    $x = new N();
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^ fg=#fb4934 fs=
//           ^ fg=#fabd2f fs=
//            ^^^ fg=#ebdbb2 fs=

    $x = new A\B\C();
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^^^ fg=#fb4934 fs=
//           ^ fg=#fabd2f fs=
//            ^ fg=#ebdbb2 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#fabd2f fs=
//                ^^^ fg=#ebdbb2 fs=

    clone $obj;
//  ^^^^^ fg=#fb4934 fs=
//        ^ fg=#458588 fs=
//         ^^^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=

    var_dump($x instanceof X);
//  ^^^^^^^^ fg=#8ec07c fs=
//          ^ fg=#bdae93 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//              ^^^^^^^^^^ fg=#8ec07c fs=
//                         ^ fg=#fabd2f fs=
//                          ^ fg=#bdae93 fs=
//                           ^ fg=#ebdbb2 fs=

    var_dump($x instanceof X\Y\Z);
//  ^^^^^^^^ fg=#8ec07c fs=
//          ^ fg=#bdae93 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//              ^^^^^^^^^^ fg=#8ec07c fs=
//                         ^ fg=#fabd2f fs=
//                          ^ fg=#ebdbb2 fs=
//                           ^ fg=#fabd2f fs=
//                            ^ fg=#ebdbb2 fs=
//                             ^ fg=#fabd2f fs=
//                              ^ fg=#bdae93 fs=
//                               ^ fg=#ebdbb2 fs=

    var_dump($x instanceof Countable);
//  ^^^^^^^^ fg=#8ec07c fs=
//          ^ fg=#bdae93 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//              ^^^^^^^^^^ fg=#8ec07c fs=
//                         ^^^^^^^^^ fg=#fabd2f fs=
//                                  ^ fg=#bdae93 fs=
//                                   ^ fg=#ebdbb2 fs=

    var_dump($x instanceof $y);
//  ^^^^^^^^ fg=#8ec07c fs=
//          ^ fg=#bdae93 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//              ^^^^^^^^^^ fg=#8ec07c fs=
//                         ^ fg=#458588 fs=
//                          ^ fg=#83a598 fs=
//                           ^ fg=#bdae93 fs=
//                            ^ fg=#ebdbb2 fs=

    $x = &$obj;
//  ^ fg=#458588 fs=
//   ^ fg=#83a598 fs=
//     ^ fg=#8ec07c fs=
//       ^ fg=#fb4934 fs=
//        ^ fg=#458588 fs=
//         ^^^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=

    add(...[1, 2]);
//  ^^^ fg=#8ec07c fs=
//     ^ fg=#bdae93 fs=
//      ^^^ fg=#8ec07c fs=
//         ^ fg=#ebdbb2 fs=
//          ^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=
//             ^ fg=#d3869b fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#bdae93 fs=
//                ^ fg=#ebdbb2 fs=

    echo "x $x";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^^ fg=#ebdbb2 fs=

    echo "x ${$x}";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^^^ fg=#458588 fs=
//             ^ fg=#83a598 fs=
//              ^ fg=#458588 fs=
//               ^^ fg=#ebdbb2 fs=

    echo "x $x[0]";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=
//             ^ fg=#d3869b fs=
//              ^^^ fg=#ebdbb2 fs=

    echo "x $x[xyz]";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=
//             ^^^ fg=#d3869b fs=
//                ^^^ fg=#ebdbb2 fs=

    echo "x $x->y";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^^ fg=#ebdbb2 fs=
//              ^ fg=#83a598 fs=
//               ^^ fg=#ebdbb2 fs=

    echo "{$x} {$x->y} {$x['y']}";
//  ^^^^ fg=#8ec07c fs=
//       ^^ fg=#ebdbb2 fs=
//         ^ fg=#458588 fs=
//          ^ fg=#83a598 fs=
//           ^ fg=#ebdbb2 fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#458588 fs=
//               ^ fg=#83a598 fs=
//                ^^ fg=#ebdbb2 fs=
//                  ^ fg=#83a598 fs=
//                   ^ fg=#ebdbb2 fs=
//                     ^ fg=#ebdbb2 fs=
//                      ^ fg=#458588 fs=
//                       ^ fg=#83a598 fs=
//                        ^^ fg=#ebdbb2 fs=
//                          ^ fg=#b8bb26 fs=
//                           ^^^^^ fg=#ebdbb2 fs=

    echo "x {${$name}}";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#ebdbb2 fs=
//           ^^ fg=#b8bb26 fs=
//             ^ fg=#458588 fs=
//              ^^^^ fg=#83a598 fs=
//                  ^ fg=#ebdbb2 fs=
//                   ^ fg=#b8bb26 fs=
//                    ^^ fg=#ebdbb2 fs=

    echo "x {$x->$y}";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#ebdbb2 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//             ^^ fg=#ebdbb2 fs=
//               ^ fg=#458588 fs=
//                ^ fg=#83a598 fs=
//                 ^^^ fg=#ebdbb2 fs=

    echo "x {$x->{$y[1]}} z";
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#b8bb26 fs=
//          ^ fg=#ebdbb2 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//             ^^ fg=#ebdbb2 fs=
//               ^^ fg=#458588 fs=
//                 ^ fg=#83a598 fs=
//                  ^ fg=#ebdbb2 fs=
//                   ^ fg=#d3869b fs=
//                    ^ fg=#ebdbb2 fs=
//                     ^ fg=#458588 fs=
//                      ^ fg=#ebdbb2 fs=
//                        ^ fg=#b8bb26 fs=
//                         ^^ fg=#ebdbb2 fs=

    echo '/x/{y}';
//  ^^^^ fg=#8ec07c fs=
//       ^ fg=#ebdbb2 fs=
//        ^^^^^^ fg=#b8bb26 fs=
//              ^^ fg=#ebdbb2 fs=

    $x = <<<CSS

    body {}
/*  ^^^^ fg=#83a598 fs= */
/*       ^^ fg=#ebdbb2 fs= */

    #id {}
/*  ^ fg=#d65d0e fs= */
/*   ^^ fg=#fe8019 fs= */
/*      ^^ fg=#ebdbb2 fs= */

    .class {}
/*  ^ fg=#d79921 fs= */
/*   ^^^^^ fg=#fabd2f fs= */
/*         ^^ fg=#ebdbb2 fs= */

CSS;

    if (x('y') && $x instanceof Countable) {
//  ^^ fg=#fb4934 fs=
//     ^ fg=#ebdbb2 fs=
//      ^ fg=#8ec07c fs=
//       ^ fg=#bdae93 fs=
//        ^ fg=#ebdbb2 fs=
//         ^ fg=#b8bb26 fs=
//          ^ fg=#ebdbb2 fs=
//           ^ fg=#bdae93 fs=
//             ^^ fg=#8ec07c fs=
//                ^ fg=#458588 fs=
//                 ^ fg=#83a598 fs=
//                   ^^^^^^^^^^ fg=#8ec07c fs=
//                              ^^^^^^^^^ fg=#fabd2f fs=
//                                       ^ fg=#ebdbb2 fs=
//                                         ^ fg=#ebdbb2 fs=

        for ($i = 0; $i < 2; $i++) {}
//      ^^^ fg=#fb4934 fs=
//          ^ fg=#ebdbb2 fs=
//           ^ fg=#458588 fs=
//            ^ fg=#83a598 fs=
//              ^ fg=#8ec07c fs=
//                ^ fg=#d3869b fs=
//                 ^ fg=#ebdbb2 fs=
//                   ^ fg=#458588 fs=
//                    ^ fg=#83a598 fs=
//                      ^ fg=#8ec07c fs=
//                        ^ fg=#d3869b fs=
//                         ^ fg=#ebdbb2 fs=
//                           ^ fg=#458588 fs=
//                            ^ fg=#83a598 fs=
//                             ^^ fg=#8ec07c fs=
//                               ^ fg=#ebdbb2 fs=
//                                 ^^ fg=#ebdbb2 fs=

        foreach ($x as $y) {
//      ^^^^^^^ fg=#fb4934 fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#458588 fs=
//                ^ fg=#83a598 fs=
//                  ^^ fg=#8ec07c fs=
//                     ^ fg=#458588 fs=
//                      ^ fg=#83a598 fs=
//                       ^ fg=#ebdbb2 fs=
//                         ^ fg=#ebdbb2 fs=

            continue;

        }

        switch ($expr) {
//      ^^^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=
//              ^ fg=#458588 fs=
//               ^^^^ fg=#83a598 fs=
//                   ^ fg=#ebdbb2 fs=
//                     ^ fg=#ebdbb2 fs=

            case 1:
//          ^^^^ fg=#fb4934 fs=
//               ^ fg=#d3869b fs=
//                ^ fg=#ebdbb2 fs=

                break;
//              ^^^^^ fg=#fb4934 fs=
//                   ^ fg=#ebdbb2 fs=

        }

        try {
//      ^^^ fg=#fb4934 fs=
//          ^ fg=#ebdbb2 fs=

        } catch (Exception $e) {
//      ^ fg=#ebdbb2 fs=
//        ^^^^^ fg=#fb4934 fs=
//              ^ fg=#ebdbb2 fs=
//               ^^^^^^^^^ fg=#fabd2f fs=
//                         ^ fg=#458588 fs=
//                          ^ fg=#83a598 fs=
//                           ^ fg=#ebdbb2 fs=
//                             ^ fg=#ebdbb2 fs=

        } finally {
//      ^ fg=#ebdbb2 fs=
//        ^^^^^^^ fg=#fb4934 fs=
//                ^ fg=#ebdbb2 fs=

        }

        while (1 >= 3) {}
//      ^^^^^ fg=#fb4934 fs=
//            ^ fg=#ebdbb2 fs=
//             ^ fg=#d3869b fs=
//               ^^ fg=#8ec07c fs=
//                  ^ fg=#d3869b fs=
//                   ^ fg=#ebdbb2 fs=
//                     ^^ fg=#ebdbb2 fs=

        do {
//      ^^ fg=#fb4934 fs=
//         ^ fg=#ebdbb2 fs=

        } while (0);
//      ^ fg=#ebdbb2 fs=
//        ^^^^^ fg=#fb4934 fs=
//              ^ fg=#ebdbb2 fs=
//               ^ fg=#d3869b fs=
//                ^^ fg=#ebdbb2 fs=

        if (0) {
//      ^^ fg=#fb4934 fs=
//         ^ fg=#ebdbb2 fs=
//          ^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=
//             ^ fg=#ebdbb2 fs=

        } elseif ($arg === 1) {
//      ^ fg=#ebdbb2 fs=
//        ^^^^^^ fg=#fb4934 fs=
//               ^ fg=#ebdbb2 fs=
//                ^ fg=#458588 fs=
//                 ^^^ fg=#83a598 fs=
//                     ^^^ fg=#8ec07c fs=
//                         ^ fg=#d3869b fs=
//                          ^ fg=#ebdbb2 fs=
//                            ^ fg=#ebdbb2 fs=

        } else {
//      ^ fg=#ebdbb2 fs=
//        ^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=

        }

    }

}

     ?>

    <?php

/**
 * @param int $x desc
// ^^^^^^ fg=#bdae93 fs=italic
//        ^^^ fg=#928374 fs=italic
//            ^^ fg=#928374 fs=italic
//               ^^^^ fg=#928374 fs=italic

 */

/**
 * @param X $x desc
// ^^^^^^ fg=#bdae93 fs=italic
//        ^ fg=#928374 fs=italic
//          ^^ fg=#928374 fs=italic
//             ^^^^ fg=#928374 fs=italic

 */

/**
 * @return int
// ^^^^^^^ fg=#bdae93 fs=italic
//         ^^^ fg=#928374 fs=italic

 */

?>

    <?php if ($expr == true): ?>
<!-- ^^^^ fg=#8ec07c fs= -->
<!--      ^^ fg=#fb4934 fs= -->
<!--         ^ fg=#ebdbb2 fs= -->
<!--          ^ fg=#458588 fs= -->
<!--           ^^^^ fg=#83a598 fs= -->
<!--                ^^ fg=#8ec07c fs= -->
<!--                   ^^^^ fg=#d3869b fs= -->
<!--                       ^^ fg=#ebdbb2 fs= -->
<!--                          ^^ fg=#8ec07c fs= -->

        Text
<!--    ^^^^ fg=#ebdbb2 fs= -->

    <?php else: ?>
<!-- ^^^^ fg=#8ec07c fs= -->
<!--      ^^^^ fg=#fb4934 fs= -->
<!--          ^ fg=#ebdbb2 fs= -->
<!--            ^^ fg=#8ec07c fs= -->

        Text
<!--    ^^^^ fg=#ebdbb2 fs= -->

    <?php endif; ?>
<!-- ^^^^ fg=#8ec07c fs= -->
<!--      ^^^^^ fg=#fb4934 fs= -->
<!--           ^ fg=#ebdbb2 fs= -->
<!--             ^^ fg=#8ec07c fs= -->

<?php

class x
// ^^ fg=#fb4934 fs=
//    ^ fg=#fabd2f fs=
{
    const X = 1;
//  ^^^^^ fg=#fb4934 fs=
//        ^ fg=#d3869b fs=
//          ^ fg=#8ec07c fs=
//            ^ fg=#d3869b fs=
//             ^ fg=#ebdbb2 fs=

    public $a;
//  ^^^^^^ fg=#fb4934 fs=
//         ^ fg=#458588 fs=
//          ^ fg=#83a598 fs=
//           ^ fg=#ebdbb2 fs=

    protected $b;
//  ^^^^^^^^^ fg=#fb4934 fs=
//            ^ fg=#458588 fs=
//             ^ fg=#83a598 fs=
//              ^ fg=#ebdbb2 fs=

    private $c;
//  ^^^^^^^ fg=#fb4934 fs=
//          ^ fg=#458588 fs=
//           ^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=

    public static $d;
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^ fg=#458588 fs=
//                 ^ fg=#83a598 fs=
//                  ^ fg=#ebdbb2 fs=

    public function a() {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^^^ fg=#8ec07c fs=
//                  ^ fg=#b8bb26 fs=
//                   ^^ fg=#ebdbb2 fs=
//                      ^^ fg=#ebdbb2 fs=

    public static function b() {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^^^^^^^^ fg=#8ec07c fs=
//                         ^ fg=#b8bb26 fs=
//                          ^^ fg=#ebdbb2 fs=
//                             ^^ fg=#ebdbb2 fs=

    abstract public function c();
//  ^^^^^^^^ fg=#fb4934 fs=
//           ^^^^^^ fg=#fb4934 fs=
//                  ^^^^^^^^ fg=#8ec07c fs=
//                           ^ fg=#b8bb26 fs=
//                            ^^^ fg=#ebdbb2 fs=

    final public function d() {}
//  ^^^^^ fg=#fb4934 fs=
//        ^^^^^^ fg=#fb4934 fs=
//               ^^^^^^^^ fg=#8ec07c fs=
//                        ^ fg=#b8bb26 fs=
//                         ^^ fg=#ebdbb2 fs=
//                            ^^ fg=#ebdbb2 fs=

    public function __construct() {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^^^ fg=#8ec07c fs=
//                  ^^^^^^^^^^^ fg=#8ec07c fs=
//                             ^^ fg=#ebdbb2 fs=
//                                ^^ fg=#ebdbb2 fs=

    public function __toString() {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^^^ fg=#8ec07c fs=
//                  ^^^^^^^^^^ fg=#8ec07c fs=
//                            ^^ fg=#ebdbb2 fs=
//                               ^^ fg=#ebdbb2 fs=

    public function e()
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^^^ fg=#8ec07c fs=
//                  ^ fg=#b8bb26 fs=
//                   ^^ fg=#ebdbb2 fs=
    {
        user_defined();
//      ^^^^^^^^^^^^ fg=#8ec07c fs=
//                  ^^ fg=#bdae93 fs=
//                    ^ fg=#ebdbb2 fs=

        phpversion();
//      ^^^^^^^^^^ fg=#8ec07c fs=
//                ^^ fg=#bdae93 fs=
//                  ^ fg=#ebdbb2 fs=
//                  
        parent::a();
//      ^^^^^^ fg=#d3869b fs=
//            ^^ fg=#ebdbb2 fs=
//              ^ fg=#689d6a fs=
//               ^^ fg=#bdae93 fs=
//                 ^ fg=#ebdbb2 fs=

        self::class;
//      ^^^^ fg=#d3869b fs=
//          ^^ fg=#ebdbb2 fs=
//            ^^^^^ fg=#d3869b fs=
//                 ^ fg=#ebdbb2 fs=

        self::$x;
//      ^^^^ fg=#d3869b fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#458588 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=

        self::a();
//      ^^^^ fg=#d3869b fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#689d6a fs=
//             ^^ fg=#bdae93 fs=
//               ^ fg=#ebdbb2 fs=

        static::$x;
//      ^^^^^^ fg=#d3869b fs=
//            ^^ fg=#ebdbb2 fs=
//              ^ fg=#458588 fs=
//               ^ fg=#fabd2f fs=
//                ^ fg=#ebdbb2 fs=

        static::a();
//      ^^^^^^ fg=#d3869b fs=
//            ^^ fg=#ebdbb2 fs=
//              ^ fg=#689d6a fs=
//               ^^ fg=#bdae93 fs=
//                 ^ fg=#ebdbb2 fs=

        $this->x;
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#83a598 fs=
//              ^ fg=#ebdbb2 fs=

        $this->a();
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#689d6a fs=
//              ^^ fg=#bdae93 fs=
//                ^ fg=#ebdbb2 fs=

        $this->$x();
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#458588 fs=
//              ^ fg=#83a598 fs=
//               ^^^ fg=#ebdbb2 fs=

        $this->a()->c()->d();
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#689d6a fs=
//              ^^ fg=#bdae93 fs=
//                ^^ fg=#ebdbb2 fs=
//                  ^ fg=#689d6a fs=
//                   ^^ fg=#bdae93 fs=
//                     ^^ fg=#ebdbb2 fs=
//                       ^ fg=#689d6a fs=
//                        ^^ fg=#bdae93 fs=
//                          ^ fg=#ebdbb2 fs=

        Abcd::$x;
//      ^^^^ fg=#fabd2f fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#458588 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=

        Abcd::X;
//      ^^^^ fg=#fabd2f fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#d3869b fs=
//             ^ fg=#ebdbb2 fs=

        echo X::class;
//      ^^^^ fg=#8ec07c fs=
//           ^ fg=#fabd2f fs=
//            ^^ fg=#ebdbb2 fs=
//              ^^^^^ fg=#d3869b fs=
//                   ^ fg=#ebdbb2 fs=

        $x = new X();
//      ^ fg=#458588 fs=
//       ^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^^^ fg=#fb4934 fs=
//               ^ fg=#fabd2f fs=
//                ^^^ fg=#ebdbb2 fs=

        $x = new self();
//      ^ fg=#458588 fs=
//       ^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^^^ fg=#fb4934 fs=
//               ^^^^ fg=#d3869b fs=
//                   ^^^ fg=#ebdbb2 fs=

        $x = new static();
//      ^ fg=#458588 fs=
//       ^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^^^ fg=#fb4934 fs=
//               ^^^^^^ fg=#d3869b fs=
//                     ^^^ fg=#ebdbb2 fs=

        $abc->a();
//      ^ fg=#458588 fs=
//       ^^^ fg=#83a598 fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#689d6a fs=
//             ^^ fg=#bdae93 fs=
//               ^ fg=#ebdbb2 fs=

        $abc::a();
//      ^ fg=#458588 fs=
//       ^^^ fg=#83a598 fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#689d6a fs=
//             ^^ fg=#bdae93 fs=
//               ^ fg=#ebdbb2 fs=

        $abc::$x;
//      ^ fg=#458588 fs=
//       ^^^ fg=#83a598 fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#458588 fs=
//             ^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=

        $abc->$x();
//      ^ fg=#458588 fs=
//       ^^^ fg=#83a598 fs=
//          ^^ fg=#ebdbb2 fs=
//            ^ fg=#458588 fs=
//             ^ fg=#83a598 fs=
//              ^^^ fg=#ebdbb2 fs=

        $this->x = array_merge($this->y, $z);
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#83a598 fs=
//               ^ fg=#8ec07c fs=
//                 ^^^^^^^^^^^ fg=#8ec07c fs=
//                            ^ fg=#bdae93 fs=
//                             ^ fg=#b16286 fs=
//                              ^^^^ fg=#d3869b fs=
//                                  ^^ fg=#ebdbb2 fs=
//                                    ^ fg=#83a598 fs=
//                                     ^ fg=#ebdbb2 fs=
//                                       ^ fg=#458588 fs=
//                                        ^ fg=#83a598 fs=
//                                         ^ fg=#bdae93 fs=
//                                          ^ fg=#ebdbb2 fs=

        $this->x($k, $v);
//      ^ fg=#b16286 fs=
//       ^^^^ fg=#d3869b fs=
//           ^^ fg=#ebdbb2 fs=
//             ^ fg=#689d6a fs=
//              ^ fg=#bdae93 fs=
//               ^ fg=#458588 fs=
//                ^ fg=#83a598 fs=
//                 ^ fg=#ebdbb2 fs=
//                   ^ fg=#458588 fs=
//                    ^ fg=#83a598 fs=
//                     ^ fg=#bdae93 fs=
//                      ^ fg=#ebdbb2 fs=

        $a = isset($this->b) ? $this->b->c('d') : new X();
//      ^ fg=#458588 fs=
//       ^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^^^^^ fg=#8ec07c fs=
//                ^ fg=#bdae93 fs=
//                 ^ fg=#b16286 fs=
//                  ^^^^ fg=#d3869b fs=
//                      ^^ fg=#ebdbb2 fs=
//                        ^ fg=#83a598 fs=
//                         ^ fg=#bdae93 fs=
//                           ^ fg=#ebdbb2 fs=
//                             ^ fg=#b16286 fs=
//                              ^^^^ fg=#d3869b fs=
//                                  ^^ fg=#ebdbb2 fs=
//                                    ^ fg=#83a598 fs=
//                                     ^^ fg=#ebdbb2 fs=
//                                       ^ fg=#689d6a fs=
//                                        ^ fg=#bdae93 fs=
//                                         ^ fg=#ebdbb2 fs=
//                                          ^ fg=#b8bb26 fs=
//                                           ^ fg=#ebdbb2 fs=
//                                            ^ fg=#bdae93 fs=
//                                              ^ fg=#ebdbb2 fs=
//                                                ^^^ fg=#fb4934 fs=
//                                                    ^ fg=#fabd2f fs=
//                                                     ^^^ fg=#ebdbb2 fs=

        if (!in_array($x, [false, 'a', 'b'], true)) {
//      ^^ fg=#fb4934 fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^^^^^^^ fg=#8ec07c fs=
//                   ^ fg=#bdae93 fs=
//                    ^ fg=#458588 fs=
//                     ^ fg=#83a598 fs=
//                      ^ fg=#ebdbb2 fs=
//                        ^ fg=#ebdbb2 fs=
//                         ^^^^^ fg=#d3869b fs=
//                              ^ fg=#ebdbb2 fs=
//                                ^ fg=#ebdbb2 fs=
//                                 ^ fg=#b8bb26 fs=
//                                  ^^ fg=#ebdbb2 fs=
//                                     ^ fg=#ebdbb2 fs=
//                                      ^ fg=#b8bb26 fs=
//                                       ^^^ fg=#ebdbb2 fs=
//                                           ^^^^ fg=#d3869b fs=
//                                               ^ fg=#bdae93 fs=
//                                                ^ fg=#ebdbb2 fs=
//                                                  ^ fg=#ebdbb2 fs=

            throw new InvalidArgumentException('x');
//          ^^^^^ fg=#fb4934 fs=
//                ^^^ fg=#fb4934 fs=
//                    ^^^^^^^^^^^^^^^^^^^^^^^^ fg=#fabd2f fs=
//                                            ^^ fg=#ebdbb2 fs=
//                                              ^ fg=#b8bb26 fs=
//                                               ^^^ fg=#ebdbb2 fs=

        }

        if (isset(static::$x[$y])) {}
//      ^^ fg=#fb4934 fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^^^ fg=#8ec07c fs=
//               ^ fg=#bdae93 fs=
//                ^^^^^^ fg=#d3869b fs=
//                      ^^ fg=#ebdbb2 fs=
//                        ^ fg=#458588 fs=
//                         ^ fg=#fabd2f fs=
//                          ^ fg=#ebdbb2 fs=
//                           ^ fg=#458588 fs=
//                            ^ fg=#83a598 fs=
//                             ^ fg=#ebdbb2 fs=
//                              ^ fg=#bdae93 fs=
//                               ^ fg=#ebdbb2 fs=
//                                 ^^ fg=#ebdbb2 fs=

        return new self();
//      ^^^^^^ fg=#fb4934 fs=
//             ^^^ fg=#fb4934 fs=
//                 ^^^^ fg=#d3869b fs=
//                     ^^^ fg=#ebdbb2 fs=

    }

    public function x(callable $v, int $v2, string $v3) {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^^^ fg=#8ec07c fs=
//                  ^ fg=#b8bb26 fs=
//                   ^ fg=#ebdbb2 fs=
//                    ^^^^^^^^ fg=#fb4934 fs=
//                             ^^^ fg=#ebdbb2 fs=
//                                 ^^^ fg=#fb4934 fs=
//                                     ^^^^ fg=#ebdbb2 fs=
//                                          ^^^^^^ fg=#fb4934 fs=
//                                                 ^^^^ fg=#ebdbb2 fs=
//                                                      ^^ fg=#ebdbb2 fs=

}
