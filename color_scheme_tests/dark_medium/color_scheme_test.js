// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "JavaScript"


/**
 * @param  {String}
// ^^^^^^ fg=#928374 fs=italic
//         ^^^^^^^^ fg=#928374 fs=italic
 * @return {Promise}
// ^^^^^^^ fg=#928374 fs=italic
//         ^^^^^^^^^ fg=#928374 fs=italic
 */

import TheirClass from "./mypath";
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^^^^ fg=#83a598 fs=
//                ^^^^ fg=#fb4934 fs=
//                     ^ fg=#ebdbb2 fs=
//                      ^^^^^^^^ fg=#b8bb26 fs=
//                              ^^ fg=#ebdbb2 fs=

import {identifier, otherIdentifier} from "somewhere";
// ^^^ fg=#fb4934 fs=
//     ^ fg=#ebdbb2 fs=
//      ^^^^^^^^^^ fg=#83a598 fs=
//                ^ fg=#ebdbb2 fs=
//                  ^^^^^^^^^^^^^^^ fg=#83a598 fs=
//                                 ^ fg=#ebdbb2 fs=
//                                   ^^^^ fg=#fb4934 fs=
//                                        ^ fg=#ebdbb2 fs=
//                                         ^^^^^^^^^ fg=#b8bb26 fs=
//                                                  ^^ fg=#ebdbb2 fs=

import thing, {identifier as otherIdentifier}, * as otherName from "otherplace";
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#83a598 fs=
//          ^ fg=#ebdbb2 fs=
//            ^ fg=#ebdbb2 fs=
//             ^^^^^^^^^^ fg=#83a598 fs=
//                        ^^ fg=#fb4934 fs=
//                           ^^^^^^^^^^^^^^^ fg=#83a598 fs=
//                                          ^^ fg=#ebdbb2 fs=
//                                             ^ fg=#d3869b fs=
//                                               ^^ fg=#fb4934 fs=
//                                                  ^^^^^^^^^ fg=#83a598 fs=
//                                                            ^^^^ fg=#fb4934 fs=
//                                                                 ^ fg=#ebdbb2 fs=
//                                                                  ^^^^^^^^^^ fg=#b8bb26 fs=
//                                                                            ^^ fg=#ebdbb2 fs=

export { name1, name2 as name3 };
// ^^^ fg=#fb4934 fs=
//     ^ fg=#ebdbb2 fs=
//       ^^^^^ fg=#83a598 fs=
//            ^ fg=#ebdbb2 fs=
//              ^^^^^ fg=#83a598 fs=
//                    ^^ fg=#fb4934 fs=
//                       ^^^^^ fg=#83a598 fs=
//                             ^^ fg=#ebdbb2 fs=

export let name1, name2;
// ^^^ fg=#fb4934 fs=
//     ^^^ fg=#fb4934 fs=
//         ^^^^^ fg=#83a598 fs=
//              ^ fg=#ebdbb2 fs=
//                ^^^^^ fg=#83a598 fs=
//                     ^ fg=#ebdbb2 fs=

export var name3;
// ^^^ fg=#fb4934 fs=
//     ^^^ fg=#fb4934 fs=
//         ^^^^^ fg=#83a598 fs=
//              ^ fg=#ebdbb2 fs=

export const name1 = 5;
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fb4934 fs=
//           ^^^^^ fg=#83a598 fs=
//                 ^ fg=#8ec07c fs=
//                   ^ fg=#d3869b fs=
//                    ^ fg=#ebdbb2 fs=

export let foo = 123
// ^^^ fg=#fb4934 fs=
//     ^^^ fg=#fb4934 fs=
//         ^^^ fg=#83a598 fs=
//             ^ fg=#8ec07c fs=
//               ^^^ fg=#d3869b fs=

export function bar() {}
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^^ fg=#8ec07c fs=
//              ^^^ fg=#b8bb26 fs=
//                 ^^ fg=#ebdbb2 fs=
//                    ^^ fg=#ebdbb2 fs=

export function foo() {};
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^^ fg=#8ec07c fs=
//              ^^^ fg=#b8bb26 fs=
//                 ^^ fg=#ebdbb2 fs=
//                    ^^^ fg=#ebdbb2 fs=

export function* foo() {};
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^^ fg=#8ec07c fs=
//             ^ fg=#fb4934 fs=
//               ^^^ fg=#b8bb26 fs=
//                  ^^ fg=#ebdbb2 fs=
//                     ^^^ fg=#ebdbb2 fs=

export async function foo() {};
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fb4934 fs=
//           ^^^^^^^^ fg=#8ec07c fs=
//                    ^^^ fg=#b8bb26 fs=
//                       ^^ fg=#ebdbb2 fs=
//                          ^^^ fg=#ebdbb2 fs=

export class Foo {};
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fb4934 fs=
//           ^^^ fg=#fabd2f fs=
//               ^^^ fg=#ebdbb2 fs=

export default expression;
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^^^ fg=#83a598 fs=
//                       ^ fg=#ebdbb2 fs=

export default function (a) { };
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^ fg=#8ec07c fs=
//                      ^^^ fg=#ebdbb2 fs=
//                          ^ fg=#ebdbb2 fs=
//                            ^^ fg=#ebdbb2 fs=

export default function* (a) { };
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^ fg=#8ec07c fs=
//                     ^ fg=#fb4934 fs=
//                       ^^^ fg=#ebdbb2 fs=
//                           ^ fg=#ebdbb2 fs=
//                             ^^ fg=#ebdbb2 fs=

export default function name1(b) { }
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^ fg=#8ec07c fs=
//                      ^^^^^ fg=#b8bb26 fs=
//                           ^^^ fg=#ebdbb2 fs=
//                               ^ fg=#ebdbb2 fs=
//                                 ^ fg=#ebdbb2 fs=

export default class Foo {};
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^ fg=#fb4934 fs=
//                   ^^^ fg=#fabd2f fs=
//                       ^^^ fg=#ebdbb2 fs=

export default +function (a) { };
// ^^^ fg=#fb4934 fs=
//     ^^^^^^^ fg=#fb4934 fs=
//             ^^^^^^^^^ fg=#8ec07c fs=
//                       ^^^ fg=#ebdbb2 fs=
//                           ^ fg=#ebdbb2 fs=
//                             ^^ fg=#ebdbb2 fs=

export { name1 as default };
// ^^^ fg=#fb4934 fs=
//     ^ fg=#ebdbb2 fs=
//       ^^^^^ fg=#83a598 fs=
//             ^^ fg=#fb4934 fs=
//                ^^^^^^^ fg=#fb4934 fs=
//                        ^^ fg=#ebdbb2 fs=

export * from "./othermod";
// ^^^ fg=#fb4934 fs=
//     ^ fg=#d3869b fs=
//       ^^^^ fg=#fb4934 fs=
//            ^ fg=#ebdbb2 fs=
//             ^^^^^^^^^^ fg=#b8bb26 fs=
//                       ^^ fg=#ebdbb2 fs=

export { name1, name2 } from "./othermod";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^ meta.block
//     ^ punctuation.section.block.begin
//                    ^ punctuation.section.block.end
//                      ^ keyword.control.import-export

export { import1 as name1, import2 as name2, nameN } from "./othermod";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//               ^ keyword.control.import-export
//                                 ^ keyword.control.import-export
//                                                   ^ keyword.control.import-export

// Better highlighting while typing.
export
export;
// <- keyword.control.import-export

import * as
    alias from "module";
// ^^^^^^^^^^^^^^^^^^^^^ meta.import.js

import { member as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js

import { * as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js

export { member as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.export.js

export { member as
    default } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export.js

let from;
//  ^^^^ variable.other.readwrite.js

import from from "./othermod";
//     ^^^^ variable.other.readwrite.js

import { from } from "./othermod";
//       ^^^^ variable.other.readwrite.js

export from from "./othermod";
//     ^^^^ variable.other.readwrite.js

export { from } from "./othermod";
//       ^^^^ variable.other.readwrite.js

export default$
//     ^^^^^^^^ - keyword
;

let x = import.meta;
//      ^^^^^^^^^^^ - meta.import
//      ^^^^^^ variable.language.import
//            ^ punctuation.accessor
//             ^^^^ variable.language.import

    import.meta;
//  ^^^^^^^^^^^ - meta.import
//  ^^^^^^ variable.language.import
//        ^ punctuation.accessor
//         ^^^^ variable.language.import

    import
    .meta;
//  ^^^^^ - meta.import
//  ^ punctuation.accessor
//   ^^^^ variable.language.import

// This object literal is technically broken since foo() does not have a
// method body, but we include it here to ensure that highlighting is not
// broken as the user is typing
let a = { otherIdentifier, foo(), baz: 1 }
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.object-literal
//        ^^^^^^^^^^^^^^^ variable.other.readwrite
//                         ^^^ entity.name.function
//                                ^^^ meta.object-literal.key

someFunction({
// ^^^^^^^^^ fg=#8ec07c fs=
//          ^ fg=#bdae93 fs=
//           ^ fg=#ebdbb2 fs=
    prop1, prop2, prop3
//  ^^^^^ fg=#83a598 fs=
//       ^ fg=#ebdbb2 fs=
//         ^^^^^ fg=#83a598 fs=
//              ^ fg=#ebdbb2 fs=
//                ^^^^^ fg=#83a598 fs=
   });
// ^ fg=#ebdbb2 fs=
//  ^ fg=#bdae93 fs=
//   ^ fg=#ebdbb2 fs=

    function foo() {}
//  ^^^^^^^^ fg=#8ec07c fs=
//           ^^^ fg=#b8bb26 fs=
//              ^^ fg=#ebdbb2 fs=
//                 ^^ fg=#ebdbb2 fs=

    var bar = function() {}
//  ^^^ fg=#fb4934 fs=
//      ^^^ fg=#83a598 fs=
//          ^ fg=#8ec07c fs=
//            ^^^^^^^^ fg=#8ec07c fs=
//                    ^^ fg=#ebdbb2 fs=
//                       ^^ fg=#ebdbb2 fs=

    baz = function*()
//  ^^^ fg=#83a598 fs=
//      ^ fg=#8ec07c fs=
//        ^^^^^^^^ fg=#8ec07c fs=
//                ^ fg=#fb4934 fs=
//                 ^^ fg=#ebdbb2 fs=
    {

    }

   function
// ^^^^^^^^ fg=#8ec07c fs=
   function() {}
// ^^^^^^^^ fg=#8ec07c fs=
//         ^^ fg=#ebdbb2 fs=
//            ^^ fg=#ebdbb2 fs=

   if (true)
// ^^ fg=#fb4934 fs=
//    ^ fg=#ebdbb2 fs=
//     ^^^^ fg=#d3869b fs=
//         ^ fg=#ebdbb2 fs=

{
    bar()
//  ^^^ fg=#8ec07c fs=
//     ^^ fg=#bdae93 fs=
}

    let _$Foobar1Ù𝓩ʷªאξ‿ᛮↂ〩;
//  ^^^ fg=#fb4934 fs=
//      ^^^^^^^^^^^^^^^^^^^ fg=#83a598 fs=
//                         ^ fg=#ebdbb2 fs=

    let ಠ_ಠ;
//  ^^^ fg=#fb4934 fs=
//      ^^^ fg=#83a598 fs=
//         ^ fg=#ebdbb2 fs=

   var str = '\':';
// ^^^ fg=#fb4934 fs=
//     ^^^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^ fg=#ebdbb2 fs=
//            ^^ fg=#fb4934 fs=
//              ^ fg=#b8bb26 fs=
//               ^^ fg=#ebdbb2 fs=

   var str2 = NaN;
// ^^^ fg=#fb4934 fs=
//     ^^^^ fg=#83a598 fs=
//          ^ fg=#8ec07c fs=
//            ^^^ fg=#d3869b fs=
//               ^ fg=#ebdbb2 fs=

   tag`Hello ${ a + b } world\nanother ${expression}.`;
// ^^^ fg=#8ec07c fs=
//    ^ fg=#ebdbb2 fs=
//     ^^^^^ fg=#b8bb26 fs=
//           ^^ fg=#8ec07c fs=
//              ^ fg=#83a598 fs=
//                ^ fg=#8ec07c fs=
//                  ^ fg=#83a598 fs=
//                    ^ fg=#8ec07c fs=
//                      ^^^^^ fg=#b8bb26 fs=
//                           ^^ fg=#fb4934 fs=
//                             ^^^^^^^ fg=#b8bb26 fs=
//                                     ^^ fg=#8ec07c fs=
//                                       ^^^^^^^^^^ fg=#83a598 fs=
//                                                 ^ fg=#8ec07c fs=
//                                                  ^ fg=#b8bb26 fs=
//                                                   ^^ fg=#ebdbb2 fs=

true ? str : str2
// ^ fg=#d3869b fs=
//   ^ fg=#8ec07c fs=
//     ^^^ fg=#83a598 fs=
//         ^ fg=#8ec07c fs=
//           ^^^^ fg=#83a598 fs=
