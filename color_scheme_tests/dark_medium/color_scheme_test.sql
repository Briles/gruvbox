-- COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).tmTheme" "SQL"

SELECT * FROM x;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#8ec07c fs=
--       ^^^^ fg=#fb4934 fs=
--            ^^ fg=#fbf1c7 fs=

SELECT 'x''y';
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#fbf1c7 fs=
--      ^ fg=#b8bb26 fs=
--       ^^ fg=#fb4934 fs=
--         ^ fg=#b8bb26 fs=
--          ^^ fg=#fbf1c7 fs=

SELECT "x""y" FROM z;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#fbf1c7 fs=
--      ^ fg=#b8bb26 fs=
--       ^^ fg=#fb4934 fs=
--         ^ fg=#b8bb26 fs=
--          ^ fg=#fbf1c7 fs=
--            ^^^^ fg=#fb4934 fs=
--                 ^^ fg=#fbf1c7 fs=

SELECT VERSION(), CURRENT_DATE;
-- ^^^ fg=#fb4934 fs=
--     ^^^^^^^^^^ fg=#fbf1c7 fs=
--                ^^^^^^^^^^^^ fg=#8ec07c fs=
--                            ^ fg=#fbf1c7 fs=

SELECT SIN(PI() / 4), (4 + 1) * 5;
-- ^^^ fg=#fb4934 fs=
--     ^^^^^^^^ fg=#fbf1c7 fs=
--              ^ fg=#8ec07c fs=
--                ^ fg=#d3869b fs=
--                 ^^ fg=#fbf1c7 fs=
--                    ^ fg=#fbf1c7 fs=
--                     ^ fg=#d3869b fs=
--                       ^ fg=#8ec07c fs=
--                         ^ fg=#d3869b fs=
--                          ^ fg=#fbf1c7 fs=
--                            ^ fg=#8ec07c fs=
--                              ^ fg=#d3869b fs=
--                               ^ fg=#fbf1c7 fs=

SELECT * FROM a WHERE b = 'c' AND d < 30;
-- ^^^ fg=#fb4934 fs=
--     ^ fg=#8ec07c fs=
--       ^^^^ fg=#fb4934 fs=
--            ^ fg=#fbf1c7 fs=
--              ^^^^^ fg=#fb4934 fs=
--                    ^ fg=#fbf1c7 fs=
--                      ^ fg=#8ec07c fs=
--                        ^ fg=#fbf1c7 fs=
--                         ^ fg=#b8bb26 fs=
--                          ^ fg=#fbf1c7 fs=
--                            ^^^ fg=#fb4934 fs=
--                                ^ fg=#fbf1c7 fs=
--                                  ^ fg=#8ec07c fs=
--                                    ^^ fg=#d3869b fs=
--                                      ^ fg=#fbf1c7 fs=

/*!40101 SET character_set_client = utf8 */;
-- ^^^^^ fg=#928374 fs=italic
--       ^^^ fg=#928374 fs=italic
--           ^^^^^^^^^^^^^^^^^^^^ fg=#928374 fs=italic
--                                ^ fg=#928374 fs=italic
--                                  ^^^^ fg=#928374 fs=italic
--                                       ^^ fg=#928374 fs=italic
--                                         ^ fg=#fbf1c7 fs=

CREATE TABLE `x` (
-- ^^^ fg=#fb4934 fs=
--     ^^^^^ fg=#fb4934 fs=
--           ^ fg=#fbf1c7 fs=
--            ^ fg=#b8bb26 fs=
--             ^ fg=#fbf1c7 fs=
--               ^ fg=#fbf1c7 fs=
  `a` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
-- ^ fg=#b8bb26 fs=
--  ^ fg=#fbf1c7 fs=
--    ^^^^^^ fg=#fb4934 fs=
--          ^ fg=#fbf1c7 fs=
--           ^^ fg=#d3869b fs=
--             ^ fg=#fbf1c7 fs=
--               ^^^^^^^^ fg=#fbf1c7 fs=
--                        ^^^ fg=#fb4934 fs=
--                            ^^^^ fg=#fb4934 fs=
--                                 ^^^^^^^^^^^^^^^ fg=#fbf1c7 fs=
  `b` int(10) unsigned NOT NULL,
-- ^ fg=#b8bb26 fs=
--  ^ fg=#fbf1c7 fs=
--    ^^^ fg=#fb4934 fs=
--       ^ fg=#fbf1c7 fs=
--        ^^ fg=#d3869b fs=
--          ^ fg=#fbf1c7 fs=
--            ^^^^^^^^ fg=#fbf1c7 fs=
--                     ^^^ fg=#fb4934 fs=
--                         ^^^^ fg=#fb4934 fs=
--                             ^ fg=#fbf1c7 fs=
  PRIMARY KEY (`x`),
-- ^^^^^^ fg=#fb4934 fs=
--        ^^^ fg=#fb4934 fs=
--            ^^ fg=#fbf1c7 fs=
--              ^ fg=#b8bb26 fs=
--               ^^^ fg=#fbf1c7 fs=
  KEY `x` (`y`)
-- ^^ fg=#fbf1c7 fs=
--    ^ fg=#fbf1c7 fs=
--     ^ fg=#b8bb26 fs=
--      ^ fg=#fbf1c7 fs=
--        ^^ fg=#fbf1c7 fs=
--          ^ fg=#b8bb26 fs=
--           ^^ fg=#fbf1c7 fs=
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- ^^^^^ fg=#fbf1c7 fs=
--      ^ fg=#8ec07c fs=
--       ^^^^^^ fg=#fbf1c7 fs=
--              ^^^^^^^ fg=#fb4934 fs=
--                      ^^^^^^^ fg=#fbf1c7 fs=
--                             ^ fg=#8ec07c fs=
--                              ^^^^ fg=#fbf1c7 fs=
--                                   ^^^^^^^ fg=#fbf1c7 fs=
--                                          ^ fg=#8ec07c fs=
--                                           ^^^^^^^^^^^^^^^^ fg=#fbf1c7 fs=

INSERT INTO `x` (`a`, `b`) VALUES ('c', 'd');
-- ^^^ fg=#fb4934 fs=
--     ^^^^ fg=#fb4934 fs=
--          ^ fg=#fbf1c7 fs=
--           ^ fg=#b8bb26 fs=
--            ^ fg=#fbf1c7 fs=
--              ^^ fg=#fbf1c7 fs=
--                ^ fg=#b8bb26 fs=
--                 ^^ fg=#fbf1c7 fs=
--                    ^ fg=#fbf1c7 fs=
--                     ^ fg=#b8bb26 fs=
--                      ^^ fg=#fbf1c7 fs=
--                         ^^^^^^ fg=#fb4934 fs=
--                                ^^ fg=#fbf1c7 fs=
--                                  ^ fg=#b8bb26 fs=
--                                   ^^ fg=#fbf1c7 fs=
--                                      ^ fg=#fbf1c7 fs=
--                                       ^ fg=#b8bb26 fs=
--                                        ^^^ fg=#fbf1c7 fs=
