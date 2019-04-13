// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "Rust"

#[derive(Debug)]
// ^^^^^ fg=#83a598 fs=
//      ^^^^^^^^ fg=#ebdbb2 fs=
pub enum State {
//  ^^^^ fg=#fb4934 fs=
//       ^^^^^ fg=#b8bb26 fs=
//             ^ fg=#ebdbb2 fs=

    Start,
//  ^^^^^^ fg=#ebdbb2 fs=

    Transient,
//  ^^^^^^^^^^ fg=#ebdbb2 fs=
    Closed,
//  ^^^^^^^ fg=#ebdbb2 fs=
}


impl From<&'a str> for State {
// ^ fg=#fb4934 fs=
//   ^^^^ fg=#fabd2f fs=
//       ^ fg=#ebdbb2 fs=
//        ^ fg=#8ec07c fs=
//         ^^ fg=#fb4934 fs=
//            ^^^ fg=#fb4934 fs=
//               ^ fg=#ebdbb2 fs=
//                 ^^^ fg=#fb4934 fs=
//                     ^^^^^ fg=#b8bb26 fs=
//                           ^ fg=#ebdbb2 fs=

    fn from(s: &'a str) -> Self {
//  ^^ fg=#8ec07c fs=
//     ^^^^ fg=#b8bb26 fs=
//         ^^^ fg=#ebdbb2 fs=
//             ^ fg=#8ec07c fs=
//              ^^ fg=#fb4934 fs=
//                 ^^^ fg=#fb4934 fs=
//                    ^ fg=#ebdbb2 fs=
//                      ^^ fg=#ebdbb2 fs=
//                         ^^^^ fg=#fb4934 fs=
//                              ^ fg=#ebdbb2 fs=

        match s {
//      ^^^^^ fg=#fb4934 fs=
//            ^ fg=#ebdbb2 fs=
//              ^ fg=#ebdbb2 fs=

            "start" => State::Start,
//          ^ fg=#ebdbb2 fs=
//           ^^^^^ fg=#b8bb26 fs=
//                ^ fg=#ebdbb2 fs=
//                  ^^ fg=#8ec07c fs=
//                     ^^^^^^^^^^^^^ fg=#ebdbb2 fs=

            "closed" => State::Closed,
//          ^ fg=#ebdbb2 fs=
//           ^^^^^^ fg=#b8bb26 fs=
//                 ^ fg=#ebdbb2 fs=
//                   ^^ fg=#8ec07c fs=
//                      ^^^^^^^^^^^^^^ fg=#ebdbb2 fs=

            _ => unreachable!(),
//          ^ fg=#8ec07c fs=
//            ^^ fg=#8ec07c fs=
//               ^^^^^^^^^^^^ fg=#fabd2f fs=
//                           ^^^ fg=#ebdbb2 fs=
        }
    }
}
