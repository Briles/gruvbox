-- COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "SQL"

SELECT * FROM x;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#8ec07c fs=
--       ^^^^ fg=#fb4934 fs=
--            ^^ fg=#ebdbb2 fs=

SELECT 'x''y';
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#ebdbb2 fs=
--      ^ fg=#b8bb26 fs=
--       ^^ fg=#fb4934 fs=
--         ^ fg=#b8bb26 fs=
--          ^^ fg=#ebdbb2 fs=

SELECT "x""y" FROM z;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#ebdbb2 fs=
--      ^ fg=#b8bb26 fs=
--       ^^ fg=#fb4934 fs=
--         ^ fg=#b8bb26 fs=
--          ^ fg=#ebdbb2 fs=
--            ^^^^ fg=#fb4934 fs=
--                 ^^ fg=#ebdbb2 fs=

SELECT VERSION(), CURRENT_DATE;
-- ^^^ fg=#fb4934 fs=
--     ^^^^^^^^^^ fg=#ebdbb2 fs=
--                ^^^^^^^^^^^^ fg=#8ec07c fs=
--                            ^ fg=#ebdbb2 fs=

SELECT SIN(PI() / 4), (4 + 1) * 5;
-- ^^^ fg=#fb4934 fs=
--     ^^^^^^^^ fg=#ebdbb2 fs=
--              ^ fg=#8ec07c fs=
--                ^ fg=#d3869b fs=
--                 ^^ fg=#ebdbb2 fs=
--                    ^ fg=#ebdbb2 fs=
--                     ^ fg=#d3869b fs=
--                       ^ fg=#8ec07c fs=
--                         ^ fg=#d3869b fs=
--                          ^ fg=#ebdbb2 fs=
--                            ^ fg=#8ec07c fs=
--                              ^ fg=#d3869b fs=
--                               ^ fg=#ebdbb2 fs=

SELECT * FROM a WHERE b = 'c' AND d < 30;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#8ec07c fs=
--       ^^^^ fg=#fb4934 fs=
--            ^ fg=#ebdbb2 fs=
--              ^^^^^ fg=#fb4934 fs=
--                    ^ fg=#ebdbb2 fs=
--                      ^ fg=#8ec07c fs=
--                        ^ fg=#ebdbb2 fs=
--                         ^ fg=#b8bb26 fs=
--                          ^ fg=#ebdbb2 fs=
--                            ^^^ fg=#fb4934 fs=
--                                ^ fg=#ebdbb2 fs=
--                                  ^ fg=#8ec07c fs=
--                                    ^^ fg=#d3869b fs=
--                                      ^ fg=#ebdbb2 fs=

/*!40101 SET character_set_client = utf8 */;
-- ^^^^^ fg=#928374 fs=italic
--       ^^^ fg=#928374 fs=italic
--           ^^^^^^^^^^^^^^^^^^^^ fg=#928374 fs=italic
--                                ^ fg=#928374 fs=italic
--                                  ^^^^ fg=#928374 fs=italic
--                                       ^^ fg=#928374 fs=italic
--                                         ^ fg=#ebdbb2 fs=

CREATE TABLE `x` (
-- ^^^ fg=#fb4934 fs=
--     ^^^^^ fg=#fb4934 fs=
--           ^ fg=#ebdbb2 fs=
--            ^ fg=#b8bb26 fs=
--             ^ fg=#ebdbb2 fs=
--               ^ fg=#ebdbb2 fs=
  `a` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
-- ^ fg=#b8bb26 fs=
--  ^ fg=#ebdbb2 fs=
--    ^^^^^^ fg=#fb4934 fs=
--          ^ fg=#ebdbb2 fs=
--           ^^ fg=#d3869b fs=
--             ^ fg=#ebdbb2 fs=
--               ^^^^^^^^ fg=#ebdbb2 fs=
--                        ^^^ fg=#fb4934 fs=
--                            ^^^^ fg=#fb4934 fs=
--                                 ^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=
  `b` int(10) unsigned NOT NULL,
-- ^ fg=#b8bb26 fs=
--  ^ fg=#ebdbb2 fs=
--    ^^^ fg=#fb4934 fs=
--       ^ fg=#ebdbb2 fs=
--        ^^ fg=#d3869b fs=
--          ^ fg=#ebdbb2 fs=
--            ^^^^^^^^ fg=#ebdbb2 fs=
--                     ^^^ fg=#fb4934 fs=
--                         ^^^^ fg=#fb4934 fs=
--                             ^ fg=#ebdbb2 fs=
  PRIMARY KEY (`x`),
-- ^^^^^^ fg=#fb4934 fs=
--        ^^^ fg=#fb4934 fs=
--            ^^ fg=#ebdbb2 fs=
--              ^ fg=#b8bb26 fs=
--               ^^^ fg=#ebdbb2 fs=
  KEY `x` (`y`)
-- ^^ fg=#ebdbb2 fs=
--    ^ fg=#ebdbb2 fs=
--     ^ fg=#b8bb26 fs=
--      ^ fg=#ebdbb2 fs=
--        ^^ fg=#ebdbb2 fs=
--          ^ fg=#b8bb26 fs=
--           ^^ fg=#ebdbb2 fs=
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- ^^^^^ fg=#ebdbb2 fs=
--      ^ fg=#8ec07c fs=
--       ^^^^^^ fg=#ebdbb2 fs=
--              ^^^^^^^ fg=#fb4934 fs=
--                      ^^^^^^^ fg=#ebdbb2 fs=
--                             ^ fg=#8ec07c fs=
--                              ^^^^ fg=#ebdbb2 fs=
--                                   ^^^^^^^ fg=#ebdbb2 fs=
--                                          ^ fg=#8ec07c fs=
--                                           ^^^^^^^^^^^^^^^^ fg=#ebdbb2 fs=

INSERT INTO `x` (`a`, `b`) VALUES ('c', 'd');
-- ^^^ fg=#fb4934 fs=
--     ^^^^ fg=#fb4934 fs=
--          ^ fg=#ebdbb2 fs=
--           ^ fg=#b8bb26 fs=
--            ^ fg=#ebdbb2 fs=
--              ^^ fg=#ebdbb2 fs=
--                ^ fg=#b8bb26 fs=
--                 ^^ fg=#ebdbb2 fs=
--                    ^ fg=#ebdbb2 fs=
--                     ^ fg=#b8bb26 fs=
--                      ^^ fg=#ebdbb2 fs=
--                         ^^^^^^ fg=#fb4934 fs=
--                                ^^ fg=#ebdbb2 fs=
--                                  ^ fg=#b8bb26 fs=
--                                   ^^ fg=#ebdbb2 fs=
--                                      ^ fg=#ebdbb2 fs=
--                                       ^ fg=#b8bb26 fs=
--                                        ^^^ fg=#ebdbb2 fs=
