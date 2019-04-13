/* COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "TypeScript" */

interface Drivable {
// ^^^^^^ fg=#fb4934 fs=
//        ^^^^^^^^ fg=#fabd2f fs=
//                 ^ fg=#ebdbb2 fs=
  drive(distance: number): boolean;
// ^^^^ fg=#b8bb26 fs=
//     ^^^^^^^^^ fg=#ebdbb2 fs=
//              ^ fg=#8ec07c fs=
//                ^^^^^^ fg=#fabd2f fs=
//                      ^ fg=#ebdbb2 fs=
//                       ^ fg=#8ec07c fs=
//                         ^^^^^^^ fg=#fabd2f fs=
//                                ^ fg=#ebdbb2 fs=
}

class Car implements Drivable {
// ^^ fg=#fb4934 fs=
//    ^^^ fg=#fabd2f fs=
//        ^^^^^^^^^^ fg=#fb4934 fs=
//                   ^^^^^^^^ fg=#fabd2f fs=
//                            ^ fg=#ebdbb2 fs=

  private _isRunning: boolean;
// ^^^^^^ fg=#fb4934 fs=
//        ^^^^^^^^^^ fg=#83a598 fs=
//                  ^ fg=#8ec07c fs=
//                    ^^^^^^^ fg=#fabd2f fs=
//                           ^ fg=#ebdbb2 fs=

  constructor() {
// ^^^^^^^^^^ fg=#fb4934 fs=
//           ^^ fg=#ebdbb2 fs=
//              ^ fg=#ebdbb2 fs=
    this._isRunning = false;
//  ^^^^ fg=#d3869b fs=
//      ^^^^^^^^^^^ fg=#ebdbb2 fs=
//                  ^ fg=#8ec07c fs=
//                    ^^^^^ fg=#d3869b fs=
//                         ^ fg=#ebdbb2 fs=
  }

    /*comment*/
//  ^^^^^^^^^^^ fg=#928374 fs=italic

    public start() {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^ fg=#b8bb26 fs=
//              ^^ fg=#ebdbb2 fs=
//                 ^ fg=#ebdbb2 fs=

    /**
    *   Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    *
    *   @param {number} distance The distance attempting to cover
//  ^ fg=#928374 fs=italic
//      ^^^^^^ fg=#bdae93 fs=italic
//             ^ fg=#ebdbb2 fs=italic
//              ^^^^^^ fg=#fabd2f fs=italic
//                    ^ fg=#ebdbb2 fs=italic
//                      ^^^^^^^^ fg=#83a598 fs=italic
//                               ^^^ fg=#928374 fs=italic
//                                   ^^^^^^^^ fg=#928374 fs=italic
//                                            ^^^^^^^^^^ fg=#928374 fs=italic
//                                                       ^^ fg=#928374 fs=italic
//                                                          ^^^^^ fg=#928374 fs=italic
    *
    *   @returns {boolean} Whether or not the drive was successful
//  ^ fg=#928374 fs=italic
//      ^^^^^^^^ fg=#bdae93 fs=italic
//               ^ fg=#ebdbb2 fs=italic
//                ^^^^^^^ fg=#fabd2f fs=italic
//                       ^ fg=#ebdbb2 fs=italic
//                         ^^^^^^^ fg=#928374 fs=italic
//                                 ^^ fg=#928374 fs=italic
//                                    ^^^ fg=#928374 fs=italic
//                                        ^^^ fg=#928374 fs=italic
//                                            ^^^^^ fg=#928374 fs=italic
//                                                  ^^^ fg=#928374 fs=italic
//                                                      ^^^^^^^^^^ fg=#928374 fs=italic
    */
    public drive(distance: number): boolean {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^ fg=#b8bb26 fs=
//              ^^^^^^^^^ fg=#ebdbb2 fs=
//                       ^ fg=#8ec07c fs=
//                         ^^^^^^ fg=#fabd2f fs=
//                               ^ fg=#ebdbb2 fs=
//                                ^ fg=#8ec07c fs=
//                                  ^^^^^^^ fg=#fabd2f fs=
//                                          ^ fg=#ebdbb2 fs=
  }

  exec();
// ^^^ fg=#8ec07c fs=
//    ^^^ fg=#ebdbb2 fs=
