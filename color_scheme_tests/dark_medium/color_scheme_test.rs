// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).tmTheme" "Rust"

#[derive(Debug)]
// ^^^^^ fg=#83a598 fs=
//      ^^^^^^^^ fg=#fbf1c7 fs=
pub enum State {
//  ^^^^ fg=#fb4934 fs=
//       ^^^^^ fg=#fbf1c7 fs=
//             ^ fg=#fbf1c7 fs=

    Start,
//  ^^^^^^ fg=#fbf1c7 fs=

    Transient,
//  ^^^^^^^^^^ fg=#fbf1c7 fs=
    Closed,
//  ^^^^^^^ fg=#fbf1c7 fs=
}


impl From<&'a str> for State {
// ^ fg=#fb4934 fs=
//   ^^^^ fg=#fabd2f fs=
//       ^ fg=#fbf1c7 fs=
//        ^ fg=#8ec07c fs=
//         ^^ fg=#fb4934 fs=
//            ^^^ fg=#fb4934 fs=
//               ^ fg=#fbf1c7 fs=
//                 ^^^ fg=#fb4934 fs=
//                     ^^^^^ fg=#fbf1c7 fs=
//                           ^ fg=#fbf1c7 fs=

    fn from(s: &'a str) -> Self {
//  ^^ fg=#8ec07c fs=
//     ^^^^ fg=#b8bb26 fs=
//         ^^^ fg=#fbf1c7 fs=
//             ^ fg=#8ec07c fs=
//              ^^ fg=#fb4934 fs=
//                 ^^^ fg=#fb4934 fs=
//                    ^ fg=#fbf1c7 fs=
//                      ^^ fg=#fbf1c7 fs=
//                         ^^^^ fg=#fb4934 fs=
//                              ^ fg=#fbf1c7 fs=

        match s {
//      ^^^^^ fg=#fb4934 fs=
//            ^ fg=#fbf1c7 fs=
//              ^ fg=#fbf1c7 fs=

            "start" => State::Start,
//          ^ fg=#fbf1c7 fs=
//           ^^^^^ fg=#b8bb26 fs=
//                ^ fg=#fbf1c7 fs=
//                  ^^ fg=#8ec07c fs=
//                     ^^^^^^^^^^^^^ fg=#fbf1c7 fs=

            "closed" => State::Closed,
//          ^ fg=#fbf1c7 fs=
//           ^^^^^^ fg=#b8bb26 fs=
//                 ^ fg=#fbf1c7 fs=
//                   ^^ fg=#8ec07c fs=
//                      ^^^^^^^^^^^^^^ fg=#fbf1c7 fs=

            _ => unreachable!(),
//          ^ fg=#8ec07c fs=
//            ^^ fg=#8ec07c fs=
//               ^^^^^^^^^^^^^^^ fg=#fbf1c7 fs=
        }
    }
}
