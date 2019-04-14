// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "Java"

/**
 * Validates a chess move.
 *
 *   <p>Use {@link #doMove} to move.
//   ^ fg=#458588 fs=italic
//    ^ fg=#83a598 fs=italic
//     ^ fg=#458588 fs=italic
//      ^^^ fg=#928374 fs=italic
//          ^ fg=#ebdbb2 fs=italic
//           ^^^^^ fg=#bdae93 fs=italic
//                 ^^^^^^^ fg=#928374 fs=italic
//                        ^ fg=#ebdbb2 fs=italic
//                          ^^ fg=#928374 fs=italic
//                             ^^^^^ fg=#928374 fs=italic
 *
 *   @param theFromFile file
//   ^^^^^^ fg=#bdae93 fs=italic
//          ^^^^^^^^^^^ fg=#ebdbb2 fs=italic
//                      ^^^^ fg=#928374 fs=italic
 *   @return            true
//   ^^^^^^^ fg=#bdae93 fs=italic
//                      ^^^^ fg=#928374 fs=italic
 */

package hi;
// ^^^^ fg=#fb4934 fs=
//      ^^ fg=#b8bb26 fs=
//        ^ fg=#ebdbb2 fs=

import java.util.HashMap;
// ^^^ fg=#fb4934 fs=
//     ^^^^ fg=#fabd2f fs=
//         ^ fg=#ebdbb2 fs=
//          ^^^^ fg=#fabd2f fs=
//              ^ fg=#ebdbb2 fs=
//               ^^^^^^^ fg=#fabd2f fs=
//                      ^ fg=#ebdbb2 fs=

import javax.swing.*;
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fabd2f fs=
//          ^ fg=#ebdbb2 fs=
//           ^^^^^ fg=#fabd2f fs=
//                ^ fg=#ebdbb2 fs=
//                 ^ fg=#8ec07c fs=
//                  ^ fg=#ebdbb2 fs=

class ExtendsTest implements Foo {}
// ^^ fg=#fb4934 fs=
//    ^^^^^^^^^^^ fg=#fabd2f fs=
//                ^^^^^^^^^^ fg=#fb4934 fs=
//                           ^^^ fg=#fabd2f fs=
//                               ^^ fg=#ebdbb2 fs=

class Foo<A> extends Bar<? extends A> {}
// ^^ fg=#fb4934 fs=
//    ^^^ fg=#fabd2f fs=
//       ^^^ fg=#ebdbb2 fs=
//           ^^^^^^^ fg=#fb4934 fs=
//                   ^^^ fg=#fabd2f fs=
//                      ^ fg=#ebdbb2 fs=
//                       ^ fg=#8ec07c fs=
//                         ^^^^^^^ fg=#fb4934 fs=
//                                 ^ fg=#fabd2f fs=
//                                  ^ fg=#ebdbb2 fs=
//                                    ^^ fg=#ebdbb2 fs=

public class FibCalculator extends Fibonacci implements Calculator {
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fb4934 fs=
//           ^^^^^^^^^^^^^ fg=#fabd2f fs=
//                         ^^^^^^^ fg=#fb4934 fs=
//                                 ^^^^^^^^^ fg=#fabd2f fs=
//                                           ^^^^^^^^^^ fg=#fb4934 fs=
//                                                      ^^^^^^^^^^ fg=#fabd2f fs=
//                                                                 ^ fg=#ebdbb2 fs=

    public static final int A_CONSTANT = 1;
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^^^^^ fg=#fb4934 fs=
//                      ^^^ fg=#fb4934 fs=
//                          ^^^^^^^^^^ fg=#fabd2f fs=
//                                     ^ fg=#8ec07c fs=
//                                       ^ fg=#d3869b fs=
//                                        ^ fg=#ebdbb2 fs=

    private static Map<Integer, Integer> memoized = new HashMap<Integer, Integer>();
//  ^^^^^^^ fg=#fb4934 fs=
//          ^^^^^^ fg=#fb4934 fs=
//                 ^^^ fg=#fabd2f fs=
//                    ^ fg=#ebdbb2 fs=
//                     ^^^^^^^ fg=#fabd2f fs=
//                            ^ fg=#ebdbb2 fs=
//                              ^^^^^^^ fg=#fabd2f fs=
//                                     ^ fg=#ebdbb2 fs=
//                                       ^^^^^^^^ fg=#ebdbb2 fs=
//                                                ^ fg=#8ec07c fs=
//                                                  ^^^ fg=#8ec07c fs=
//                                                      ^^^^^^^ fg=#fabd2f fs=
//                                                             ^ fg=#ebdbb2 fs=
//                                                              ^^^^^^^ fg=#fabd2f fs=
//                                                                     ^ fg=#ebdbb2 fs=
//                                                                       ^^^^^^^ fg=#fabd2f fs=
//                                                                              ^^^^ fg=#ebdbb2 fs=

    public static void x(String... args) {}
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^^^^ fg=#fb4934 fs=
//                     ^ fg=#b8bb26 fs=
//                      ^ fg=#ebdbb2 fs=
//                       ^^^^^^ fg=#fabd2f fs=
//                             ^^^ fg=#8ec07c fs=
//                                 ^^^^^ fg=#ebdbb2 fs=
//                                       ^^ fg=#ebdbb2 fs=

    public static void main(String[] args) {
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^^^^ fg=#fb4934 fs=
//                     ^^^^ fg=#b8bb26 fs=
//                         ^ fg=#ebdbb2 fs=
//                          ^^^^^^ fg=#fabd2f fs=
//                                ^^ fg=#fb4934 fs=
//                                   ^^^^^ fg=#ebdbb2 fs=
//                                         ^ fg=#ebdbb2 fs=

        System.out.println("Hello World!");
//      ^^^^^^ fg=#fabd2f fs=
//            ^^^^^ fg=#ebdbb2 fs=
//                 ^^^^^^^ fg=#8ec07c fs=
//                        ^^ fg=#ebdbb2 fs=
//                          ^^^^^ fg=#b8bb26 fs=
//                                ^^^^^^ fg=#b8bb26 fs=
//                                      ^^^ fg=#ebdbb2 fs=

        memoized.put(1, 1);
//      ^^^^^^^^^ fg=#ebdbb2 fs=
//               ^^^ fg=#8ec07c fs=
//                  ^ fg=#ebdbb2 fs=
//                   ^ fg=#d3869b fs=
//                    ^ fg=#ebdbb2 fs=
//                      ^ fg=#d3869b fs=
//                       ^^ fg=#ebdbb2 fs=
        memoized.put(2, 1);
//      ^^^^^^^^^ fg=#ebdbb2 fs=
//               ^^^ fg=#8ec07c fs=
//                  ^ fg=#ebdbb2 fs=
//                   ^ fg=#d3869b fs=
//                    ^ fg=#ebdbb2 fs=
//                      ^ fg=#d3869b fs=
//                       ^^ fg=#ebdbb2 fs=

        System.out.println(fibonacci(12)); //Get the 12th Fibonacci number and print to console
//      ^^^^^^ fg=#fabd2f fs=
//            ^^^^^ fg=#ebdbb2 fs=
//                 ^^^^^^^ fg=#8ec07c fs=
//                        ^ fg=#ebdbb2 fs=
//                         ^^^^^^^^^ fg=#8ec07c fs=
//                                  ^ fg=#ebdbb2 fs=
//                                   ^^ fg=#d3869b fs=
//                                     ^^^ fg=#ebdbb2 fs=
//                                         ^^^^^ fg=#928374 fs=italic
//                                               ^^^ fg=#928374 fs=italic
//                                                   ^^^^ fg=#928374 fs=italic
//                                                        ^^^^^^^^^ fg=#928374 fs=italic
//                                                                  ^^^^^^ fg=#928374 fs=italic
//                                                                         ^^^ fg=#928374 fs=italic
//                                                                             ^^^^^ fg=#928374 fs=italic
//                                                                                   ^^ fg=#928374 fs=italic
//                                                                                      ^^^^^^^ fg=#928374 fs=italic

    }

    public static int fibonacci(int fibIndex) {
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^^ fg=#fb4934 fs=
//                ^^^ fg=#fb4934 fs=
//                    ^^^^^^^^^ fg=#b8bb26 fs=
//                             ^ fg=#ebdbb2 fs=
//                              ^^^ fg=#fb4934 fs=
//                                  ^^^^^^^^^ fg=#ebdbb2 fs=
//                                            ^ fg=#ebdbb2 fs=

        if (memoized.containsKey(fibIndex)) {
//      ^^ fg=#fb4934 fs=
//         ^^^^^^^^^^ fg=#ebdbb2 fs=
//                   ^^^^^^^^^^^ fg=#8ec07c fs=
//                              ^^^^^^^^^^^ fg=#ebdbb2 fs=
//                                          ^ fg=#ebdbb2 fs=

            return memoized.get(fibIndex);
//          ^^^^^^ fg=#fb4934 fs=
//                 ^^^^^^^^^ fg=#ebdbb2 fs=
//                          ^^^ fg=#8ec07c fs=
//                             ^^^^^^^^^^^ fg=#ebdbb2 fs=

        } else {
//      ^ fg=#ebdbb2 fs=
//        ^^^^ fg=#fb4934 fs=
//             ^ fg=#ebdbb2 fs=

            int answer = fibonacci(fibIndex - 1) + fibonacci(fibIndex - 2);
//          ^^^ fg=#fb4934 fs=
//              ^^^^^^ fg=#ebdbb2 fs=
//                     ^ fg=#8ec07c fs=
//                       ^^^^^^^^^ fg=#8ec07c fs=
//                                ^^^^^^^^^ fg=#ebdbb2 fs=
//                                          ^ fg=#8ec07c fs=
//                                            ^ fg=#d3869b fs=
//                                             ^ fg=#ebdbb2 fs=
//                                               ^ fg=#8ec07c fs=
//                                                 ^^^^^^^^^ fg=#8ec07c fs=
//                                                          ^^^^^^^^^ fg=#ebdbb2 fs=
//                                                                    ^ fg=#8ec07c fs=
//                                                                      ^ fg=#d3869b fs=
//                                                                       ^^ fg=#ebdbb2 fs=

            memoized.put(fibIndex, answer);
//          ^^^^^^^^^ fg=#ebdbb2 fs=
//                   ^^^ fg=#8ec07c fs=
//                      ^^^^^^^^^^ fg=#ebdbb2 fs=
//                                 ^^^^^^^^ fg=#ebdbb2 fs=

            return answer;
//          ^^^^^^ fg=#fb4934 fs=
//                 ^^^^^^^ fg=#ebdbb2 fs=
        }
    }
}

public class Hello extends JFrame {
// ^^^ fg=#fb4934 fs=
//     ^^^^^ fg=#fb4934 fs=
//           ^^^^^ fg=#fabd2f fs=
//                 ^^^^^^^ fg=#fb4934 fs=
//                         ^^^^^^ fg=#fabd2f fs=
//                                ^ fg=#ebdbb2 fs=
    public Hello() {
//  ^^^^^^ fg=#fb4934 fs=
//         ^^^^^ fg=#b8bb26 fs=
//              ^^ fg=#ebdbb2 fs=
//                 ^ fg=#ebdbb2 fs=
        super.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
//      ^^^^^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=
//            ^^^^^^^^^^^^^^^^^^^^^^^^ fg=#8ec07c fs=
//                                    ^ fg=#ebdbb2 fs=
//                                     ^^^^^^^^^^^^^^^ fg=#fabd2f fs=
//                                                    ^ fg=#ebdbb2 fs=
//                                                     ^^^^^^^^^^^^^ fg=#d3869b fs=
//                                                                  ^^ fg=#ebdbb2 fs=

        super.add(new JLabel("Hello, world!"));
//      ^^^^^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=
//            ^^^ fg=#8ec07c fs=
//               ^ fg=#ebdbb2 fs=
//                ^^^ fg=#8ec07c fs=
//                    ^^^^^^ fg=#fabd2f fs=
//                          ^^ fg=#ebdbb2 fs=
//                            ^^^^^^ fg=#b8bb26 fs=
//                                   ^^^^^^ fg=#b8bb26 fs=
//                                         ^^^^ fg=#ebdbb2 fs=

        super.setVisible(true);
//      ^^^^^ fg=#d3869b fs=
//           ^ fg=#ebdbb2 fs=
//            ^^^^^^^^^^ fg=#8ec07c fs=
//                      ^ fg=#ebdbb2 fs=
//                       ^^^^ fg=#d3869b fs=
//                           ^^ fg=#ebdbb2 fs=
    }
}
