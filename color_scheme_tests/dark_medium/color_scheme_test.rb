# COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "Ruby"

    # This indented comment is to the preceding whitespace.
#   ^ fg=#928374 fs=italic
#     ^^^^ fg=#928374 fs=italic
#          ^^^^^^^^ fg=#928374 fs=italic
#                   ^^^^^^^ fg=#928374 fs=italic
#                           ^^ fg=#928374 fs=italic
#                              ^^ fg=#928374 fs=italic
#                                 ^^^ fg=#928374 fs=italic
#                                     ^^^^^^^^^ fg=#928374 fs=italic
#                                               ^^^^^^^^^^^ fg=#928374 fs=italic

x = nil
# ^ fg=#8ec07c fs=
#   ^^^ fg=#d3869b fs=

x = false
# ^ fg=#8ec07c fs=
#   ^^^^^ fg=#d3869b fs=

x = __dir__
# ^ fg=#8ec07c fs=
#   ^^^^^^^ fg=#8ec07c fs=

x = __FILE__
# ^ fg=#8ec07c fs=
#   ^^^^^^^^ fg=#d3869b fs=

abc.to_s
# ^^ fg=#fbf1c7 fs=
#   ^^^^ fg=#8ec07c fs=

x = String.new("x")
# ^ fg=#8ec07c fs=
#   ^^^^^^ fg=#8ec07c fs=
#         ^ fg=#fbf1c7 fs=
#          ^^^ fg=#8ec07c fs=
#             ^^ fg=#fbf1c7 fs=
#               ^ fg=#b8bb26 fs=
#                ^^ fg=#fbf1c7 fs=

x = "x%dy\nz"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#8ec07c fs=
#       ^ fg=#b8bb26 fs=
#        ^^ fg=#fb4934 fs=
#          ^ fg=#b8bb26 fs=
#           ^ fg=#fbf1c7 fs=

puts "x"
# ^^ fg=#8ec07c fs=
#    ^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

x = %(x)
# ^ fg=#8ec07c fs=
#   ^^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

x = %[x]
# ^ fg=#8ec07c fs=
#   ^^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

x = %{x}
# ^ fg=#8ec07c fs=
#   ^^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^ fg=#fbf1c7 fs=

x = "a#{x}b"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#8ec07c fs=
#       ^ fg=#b8bb26 fs=
#        ^ fg=#8ec07c fs=
#         ^ fg=#b8bb26 fs=
#          ^ fg=#fbf1c7 fs=

x = "a#{x.y}b"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#8ec07c fs=
#       ^ fg=#b8bb26 fs=
#        ^ fg=#fbf1c7 fs=
#         ^ fg=#b8bb26 fs=
#          ^ fg=#8ec07c fs=
#           ^ fg=#b8bb26 fs=
#            ^ fg=#fbf1c7 fs=

x = "a#{X.inspect}b"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#8ec07c fs=
#       ^ fg=#fabd2f fs=
#        ^ fg=#fbf1c7 fs=
#         ^^^^^^^^ fg=#8ec07c fs=
#                 ^ fg=#b8bb26 fs=
#                  ^ fg=#fbf1c7 fs=

x = "a#{X.y}b"
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#8ec07c fs=
#       ^ fg=#fabd2f fs=
#        ^ fg=#fbf1c7 fs=
#         ^ fg=#b8bb26 fs=
#          ^ fg=#8ec07c fs=
#           ^ fg=#b8bb26 fs=
#            ^ fg=#fbf1c7 fs=

x = "y".freeze
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#fbf1c7 fs=
#       ^^^^^^ fg=#8ec07c fs=

x = /^\/?(a|b|c|\(\w*\))/
# ^ fg=#8ec07c fs=
#   ^ fg=#bdae93 fs=
#    ^ fg=#b8bb26 fs=
#     ^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
#        ^^^^^^^ fg=#fbf1c7 fs=
#               ^^^^ fg=#fb4934 fs=
#                   ^ fg=#fbf1c7 fs=
#                    ^^ fg=#fb4934 fs=
#                      ^ fg=#fbf1c7 fs=
#                       ^ fg=#bdae93 fs=

x = []

x = ["a", "b"]
# ^ fg=#8ec07c fs=
#   ^^ fg=#fbf1c7 fs=
#     ^ fg=#b8bb26 fs=
#      ^^ fg=#fbf1c7 fs=
#         ^ fg=#fbf1c7 fs=
#          ^ fg=#b8bb26 fs=
#           ^^ fg=#fbf1c7 fs=

x = [:a, :b]
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b16286 fs=
#     ^ fg=#d3869b fs=
#      ^ fg=#fbf1c7 fs=
#        ^ fg=#b16286 fs=
#         ^ fg=#d3869b fs=
#          ^ fg=#fbf1c7 fs=

x = [a, b, c].x.join(".")
# ^ fg=#8ec07c fs=
#   ^^^ fg=#fbf1c7 fs=
#       ^^ fg=#fbf1c7 fs=
#          ^^^^^^^^^^^ fg=#fbf1c7 fs=
#                     ^ fg=#b8bb26 fs=
#                      ^^ fg=#fbf1c7 fs=

x = [A, B, C].x.join(".")
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#fabd2f fs=
#     ^ fg=#fbf1c7 fs=
#       ^ fg=#fabd2f fs=
#        ^ fg=#fbf1c7 fs=
#          ^ fg=#fabd2f fs=
#           ^^^^^^^^^^ fg=#fbf1c7 fs=
#                     ^ fg=#b8bb26 fs=
#                      ^^ fg=#fbf1c7 fs=

x = {}

x = { a: "b", c: "d" }
# ^ fg=#8ec07c fs=
#   ^ fg=#fbf1c7 fs=
#     ^ fg=#d3869b fs=
#      ^ fg=#b16286 fs=
#        ^ fg=#fbf1c7 fs=
#         ^ fg=#b8bb26 fs=
#          ^^ fg=#fbf1c7 fs=
#             ^ fg=#d3869b fs=
#              ^ fg=#b16286 fs=
#                ^ fg=#fbf1c7 fs=
#                 ^ fg=#b8bb26 fs=
#                  ^ fg=#fbf1c7 fs=
#                    ^ fg=#fbf1c7 fs=

x = Class.new(X::Abc)
# ^ fg=#8ec07c fs=
#   ^^^^^ fg=#fabd2f fs=
#        ^ fg=#fbf1c7 fs=
#         ^^^ fg=#8ec07c fs=
#            ^ fg=#fbf1c7 fs=
#             ^ fg=#fabd2f fs=
#              ^^^^^^ fg=#fbf1c7 fs=

x = merge("a" => x.y, "b" => X.y)
# ^ fg=#8ec07c fs=
#   ^^^^^^^ fg=#fbf1c7 fs=
#          ^ fg=#b8bb26 fs=
#           ^ fg=#fbf1c7 fs=
#             ^^ fg=#fbf1c7 fs=
#                ^^^^ fg=#fbf1c7 fs=
#                     ^ fg=#fbf1c7 fs=
#                      ^ fg=#b8bb26 fs=
#                       ^ fg=#fbf1c7 fs=
#                         ^^ fg=#fbf1c7 fs=
#                            ^ fg=#fabd2f fs=
#                             ^^^ fg=#fbf1c7 fs=

x = merge(
  "a" => x.y,
# ^ fg=#fbf1c7 fs=
#  ^ fg=#b8bb26 fs=
#   ^ fg=#fbf1c7 fs=
#     ^^ fg=#fbf1c7 fs=
#        ^^^^ fg=#fbf1c7 fs=

  "b" => X.y
# ^ fg=#fbf1c7 fs=
#  ^ fg=#b8bb26 fs=
#   ^ fg=#fbf1c7 fs=
#     ^^ fg=#fbf1c7 fs=
#        ^ fg=#fabd2f fs=
#         ^^ fg=#fbf1c7 fs=

)

call(/regex/, "x")
# ^^^ fg=#fbf1c7 fs=
#    ^ fg=#bdae93 fs=
#     ^^^^^ fg=#b8bb26 fs=
#          ^ fg=#bdae93 fs=
#           ^ fg=#fbf1c7 fs=
#             ^ fg=#fbf1c7 fs=
#              ^ fg=#b8bb26 fs=
#               ^^ fg=#fbf1c7 fs=

abc = X.new("y")
# ^ fg=#fbf1c7 fs=
#   ^ fg=#8ec07c fs=
#     ^ fg=#fabd2f fs=
#      ^ fg=#fbf1c7 fs=
#       ^^^ fg=#8ec07c fs=
#          ^^ fg=#fbf1c7 fs=
#            ^ fg=#b8bb26 fs=
#             ^^ fg=#fbf1c7 fs=

abc.x
# ^^^ fg=#fbf1c7 fs=

ABC::X
# ^ fg=#fabd2f fs=
#  ^^^ fg=#fbf1c7 fs=

ABC::X.Y
# ^ fg=#fabd2f fs=
#  ^^ fg=#fbf1c7 fs=
#    ^ fg=#fabd2f fs=
#     ^^ fg=#fbf1c7 fs=

ABC::X.y
# ^ fg=#fabd2f fs=
#  ^^ fg=#fbf1c7 fs=
#    ^ fg=#fabd2f fs=
#     ^^ fg=#fbf1c7 fs=

if name.is_a?(Pathname)
#  ^^^^ fg=#8ec07c fs=
#      ^ fg=#fbf1c7 fs=
#       ^^^^^ fg=#8ec07c fs=
#            ^ fg=#fbf1c7 fs=
#             ^^^^^^^^ fg=#fabd2f fs=
#                     ^ fg=#fbf1c7 fs=

x = <<END
# ^ fg=#8ec07c fs=
#   ^^^^^ fg=#fbf1c7 fs=

  string
# ^^^^^^ fg=#b8bb26 fs=

END

x = <<-END
# ^ fg=#8ec07c fs=
#   ^^^^^^ fg=#fbf1c7 fs=

  string
# ^^^^^^ fg=#b8bb26 fs=

END

x = <<~EOF
# ^ fg=#8ec07c fs=
#   ^^^^^^ fg=#fbf1c7 fs=

  string
# ^^^^^^ fg=#b8bb26 fs=

EOF

abc.each do |x|
# ^^^^^^ fg=#fbf1c7 fs=
#        ^^ fg=#fb4934 fs=
#           ^ fg=#bdae93 fs=
#            ^ fg=#fbf1c7 fs=
#             ^ fg=#bdae93 fs=

end

module X
# ^^^^ fg=#fb4934 fs=
#      ^ fg=#fe8019 fs=

end

class X
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=

end

class X::Y
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#      ^^ fg=#fbf1c7 fs=
#        ^ fg=#fabd2f fs=

end

class X < Y
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#       ^ fg=#fbf1c7 fs=
#         ^ fg=#fabd2f fs=

end

class A::B < C::D
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#      ^^ fg=#fbf1c7 fs=
#        ^ fg=#fabd2f fs=
#          ^ fg=#fbf1c7 fs=
#            ^ fg=#fabd2f fs=
#             ^^ fg=#fbf1c7 fs=
#               ^ fg=#fabd2f fs=

end

class X # :nodoc
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
#       ^ fg=#928374 fs=italic
#         ^^^^^^ fg=#928374 fs=italic

end

class X
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=
  x "y"
# ^ fg=#fbf1c7 fs=
#   ^ fg=#fbf1c7 fs=
#    ^ fg=#b8bb26 fs=
#     ^ fg=#fbf1c7 fs=

  X = "y"
# ^ fg=#fabd2f fs=
#   ^ fg=#8ec07c fs=
#     ^ fg=#fbf1c7 fs=
#      ^ fg=#b8bb26 fs=
#       ^ fg=#fbf1c7 fs=

  def self.v
# ^^^ fg=#fb4934 fs=
#     ^^^^ fg=#d3869b fs=
#         ^ fg=#fbf1c7 fs=
#          ^ fg=#b8bb26 fs=

    A::B.new C::D
#   ^ fg=#fabd2f fs=
#    ^^ fg=#fbf1c7 fs=
#      ^ fg=#fabd2f fs=
#       ^ fg=#fbf1c7 fs=
#        ^^^ fg=#8ec07c fs=
#            ^ fg=#fabd2f fs=
#             ^^^ fg=#fbf1c7 fs=

  end
# ^^^ fg=#fb4934 fs=

  module C
# ^^^^^^ fg=#fb4934 fs=
#        ^ fg=#fe8019 fs=

    A = 5
#   ^ fg=#fabd2f fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#d3869b fs=

    B = 2
#   ^ fg=#fabd2f fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#d3869b fs=
    C = 0
#   ^ fg=#fabd2f fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#d3869b fs=
    D = [a, b, c].compact.join(".")
#   ^ fg=#fabd2f fs=
#     ^ fg=#8ec07c fs=
#       ^^^ fg=#fbf1c7 fs=
#           ^^ fg=#fbf1c7 fs=
#              ^^^^^^^^^^^^^^^^^ fg=#fbf1c7 fs=
#                               ^ fg=#b8bb26 fs=
#                                ^^ fg=#fbf1c7 fs=

    E = [A, B, C].compact.join(".")
#   ^ fg=#fabd2f fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#fbf1c7 fs=
#        ^ fg=#fabd2f fs=
#         ^ fg=#fbf1c7 fs=
#           ^ fg=#fabd2f fs=
#            ^ fg=#fbf1c7 fs=
#              ^ fg=#fabd2f fs=
#               ^^^^^^^^^^^^^^^^ fg=#fbf1c7 fs=
#                               ^ fg=#b8bb26 fs=
#                                ^^ fg=#fbf1c7 fs=

  end

  private
# ^^^^^^^ fg=#8ec07c fs=

    def x
#   ^^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=

    end

end

class X
# ^^^ fg=#fb4934 fs=
#     ^ fg=#fabd2f fs=

  include X::Y::Z
# ^^^^^^^ fg=#8ec07c fs=
#         ^ fg=#fabd2f fs=
#          ^^ fg=#fbf1c7 fs=
#            ^ fg=#fabd2f fs=
#             ^^^ fg=#fbf1c7 fs=

  autoload :X, "y"
# ^^^^^^^^ fg=#8ec07c fs=
#          ^ fg=#b16286 fs=
#           ^ fg=#d3869b fs=
#            ^ fg=#fbf1c7 fs=
#              ^ fg=#fbf1c7 fs=
#               ^ fg=#b8bb26 fs=
#                ^ fg=#fbf1c7 fs=

  def x
# ^^^ fg=#fb4934 fs=
#     ^ fg=#b8bb26 fs=

    puts "Hi #{@name}!"
#   ^^^^ fg=#8ec07c fs=
#        ^ fg=#fbf1c7 fs=
#         ^^ fg=#b8bb26 fs=
#            ^^ fg=#8ec07c fs=
#              ^ fg=#458588 fs=
#               ^^^^ fg=#83a598 fs=
#                   ^ fg=#8ec07c fs=
#                    ^ fg=#b8bb26 fs=
#                     ^ fg=#fbf1c7 fs=

    abc = @y
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#8ec07c fs=
#         ^ fg=#458588 fs=
#          ^ fg=#83a598 fs=

    ABC.y = z
#   ^^^ fg=#fabd2f fs=
#      ^^ fg=#fbf1c7 fs=
#         ^ fg=#8ec07c fs=
#           ^ fg=#fbf1c7 fs=

    ABC.y(:z, x)
#   ^^^ fg=#fabd2f fs=
#      ^^^ fg=#fbf1c7 fs=
#         ^ fg=#b16286 fs=
#          ^ fg=#d3869b fs=
#           ^ fg=#fbf1c7 fs=
#             ^^ fg=#fbf1c7 fs=

    abc "y", z, Dir.pwd
#   ^^^ fg=#fbf1c7 fs=
#       ^ fg=#fbf1c7 fs=
#        ^ fg=#b8bb26 fs=
#         ^^ fg=#fbf1c7 fs=
#            ^^ fg=#fbf1c7 fs=
#               ^^^ fg=#fabd2f fs=
#                  ^^^^ fg=#fbf1c7 fs=

    @x = false
#   ^ fg=#458588 fs=
#    ^ fg=#83a598 fs=
#      ^ fg=#8ec07c fs=
#        ^^^^^ fg=#d3869b fs=

    @x = Class.new(X::Abc)
#   ^ fg=#458588 fs=
#    ^ fg=#83a598 fs=
#      ^ fg=#8ec07c fs=
#        ^^^^^ fg=#fabd2f fs=
#             ^ fg=#fbf1c7 fs=
#              ^^^ fg=#8ec07c fs=
#                 ^ fg=#fbf1c7 fs=
#                  ^ fg=#fabd2f fs=
#                   ^^^^^^ fg=#fbf1c7 fs=

    @x = @y
#   ^ fg=#458588 fs=
#    ^ fg=#83a598 fs=
#      ^ fg=#8ec07c fs=
#        ^ fg=#458588 fs=
#         ^ fg=#83a598 fs=

    x = "a#{@x['y']}b"
#   ^ fg=#fbf1c7 fs=
#     ^ fg=#8ec07c fs=
#       ^ fg=#fbf1c7 fs=
#        ^ fg=#b8bb26 fs=
#         ^^ fg=#8ec07c fs=
#           ^ fg=#458588 fs=
#            ^ fg=#83a598 fs=
#             ^^ fg=#fbf1c7 fs=
#               ^ fg=#b8bb26 fs=
#                ^^ fg=#fbf1c7 fs=
#                  ^ fg=#8ec07c fs=
#                   ^ fg=#b8bb26 fs=
#                    ^ fg=#fbf1c7 fs=

    super.merge(
#   ^^^^^ fg=#fb4934 fs=
#        ^^^^^^^ fg=#fbf1c7 fs=

      "a" => x.y,
#     ^ fg=#fbf1c7 fs=
#      ^ fg=#b8bb26 fs=
#       ^ fg=#fbf1c7 fs=
#         ^^ fg=#fbf1c7 fs=
#            ^^^^ fg=#fbf1c7 fs=

      "b" => X.y
#     ^ fg=#fbf1c7 fs=
#      ^ fg=#b8bb26 fs=
#       ^ fg=#fbf1c7 fs=
#         ^^ fg=#fbf1c7 fs=
#            ^ fg=#fabd2f fs=
#             ^^ fg=#fbf1c7 fs=

    )

  end

  class << self
# ^^^^^ fg=#fb4934 fs=
#       ^^ fg=#8ec07c fs=
#          ^^^^ fg=#d3869b fs=

    def x(y)
#   ^^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
#        ^^^ fg=#fbf1c7 fs=

      super

    end

    def x
#   ^^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
      super.x!
#     ^^^^^ fg=#fb4934 fs=
#          ^^^ fg=#fbf1c7 fs=

    end

    def x(x = {}, &block)
#   ^^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
#        ^^ fg=#fbf1c7 fs=
#           ^ fg=#8ec07c fs=
#             ^^^ fg=#fbf1c7 fs=
#                 ^ fg=#8ec07c fs=
#                  ^^^^^^ fg=#fbf1c7 fs=

      new(x, &block).x!
#     ^^^ fg=#8ec07c fs=
#        ^^^ fg=#fbf1c7 fs=
#            ^ fg=#8ec07c fs=
#             ^^^^^^^^^ fg=#fbf1c7 fs=

    end

    attr_accessor :x, :y
#   ^^^^^^^^^^^^^ fg=#8ec07c fs=
#                 ^ fg=#b16286 fs=
#                  ^ fg=#d3869b fs=
#                   ^ fg=#fbf1c7 fs=
#                     ^ fg=#b16286 fs=
#                      ^ fg=#d3869b fs=

    alias_method :x?, :y
#   ^^^^^^^^^^^^ fg=#fb4934 fs=
#                ^ fg=#b16286 fs=
#                 ^^ fg=#d3869b fs=
#                   ^ fg=#fbf1c7 fs=
#                     ^ fg=#b16286 fs=
#                      ^ fg=#d3869b fs=

    attr_reader :x, :y, :z
#   ^^^^^^^^^^^ fg=#8ec07c fs=
#               ^ fg=#b16286 fs=
#                ^ fg=#d3869b fs=
#                 ^ fg=#fbf1c7 fs=
#                   ^ fg=#b16286 fs=
#                    ^ fg=#d3869b fs=
#                     ^ fg=#fbf1c7 fs=
#                       ^ fg=#b16286 fs=
#                        ^ fg=#d3869b fs=

    delegate :a, :b=, c: :d
#   ^^^^^^^^ fg=#fbf1c7 fs=
#            ^ fg=#b16286 fs=
#             ^ fg=#d3869b fs=
#              ^ fg=#fbf1c7 fs=
#                ^ fg=#b16286 fs=
#                 ^^ fg=#d3869b fs=
#                   ^ fg=#fbf1c7 fs=
#                     ^ fg=#d3869b fs=
#                      ^ fg=#b16286 fs=
#                        ^ fg=#b16286 fs=
#                         ^ fg=#d3869b fs=

    def x?
#   ^^^ fg=#fb4934 fs=
#       ^^ fg=#b8bb26 fs=

    end

    def x(name)
#   ^^^ fg=#fb4934 fs=
#       ^ fg=#b8bb26 fs=
#        ^^^^^^ fg=#fbf1c7 fs=

      if name.is_a?(Pathname)
#     ^^ fg=#fb4934 fs=
#        ^^^^ fg=#8ec07c fs=
#            ^ fg=#fbf1c7 fs=
#             ^^^^^ fg=#8ec07c fs=
#                  ^ fg=#fbf1c7 fs=
#                   ^^^^^^^^ fg=#fabd2f fs=
#                           ^ fg=#fbf1c7 fs=
        y = name
#       ^ fg=#fbf1c7 fs=
#         ^ fg=#8ec07c fs=
#           ^^^^ fg=#8ec07c fs=
      else
        y = Pathname.new("#{p["c"].e.f}/#{name}.yml")
#       ^ fg=#fbf1c7 fs=
#         ^ fg=#8ec07c fs=
#           ^^^^^^^^ fg=#fabd2f fs=
#                   ^ fg=#fbf1c7 fs=
#                    ^^^ fg=#8ec07c fs=
#                       ^^ fg=#fbf1c7 fs=
#                         ^^^ fg=#8ec07c fs=
#                            ^^ fg=#fbf1c7 fs=
#                              ^ fg=#b8bb26 fs=
#                               ^^^ fg=#fbf1c7 fs=
#                                  ^ fg=#b8bb26 fs=
#                                   ^ fg=#fbf1c7 fs=
#                                    ^ fg=#b8bb26 fs=
#                                     ^ fg=#8ec07c fs=
#                                      ^ fg=#b8bb26 fs=
#                                       ^^^^^^^ fg=#8ec07c fs=
#                                              ^^^^ fg=#b8bb26 fs=
#                                                  ^^ fg=#fbf1c7 fs=
      end
    rescue X::SyntaxError => e
#   ^^^^^^ fg=#fb4934 fs=
#          ^ fg=#fabd2f fs=
#           ^^^^^^^^^^^^^ fg=#fbf1c7 fs=
#                         ^^ fg=#fbf1c7 fs=
#                            ^ fg=#fbf1c7 fs=

      raise "A #{x}" \
#     ^^^^^ fg=#8ec07c fs=
#           ^ fg=#fbf1c7 fs=
#            ^ fg=#b8bb26 fs=
#              ^^ fg=#8ec07c fs=
#                ^ fg=#b8bb26 fs=
#                 ^ fg=#8ec07c fs=
#                  ^ fg=#fbf1c7 fs=
#                    ^ fg=#fbf1c7 fs=

        "B" \
#       ^ fg=#fbf1c7 fs=
#        ^ fg=#b8bb26 fs=
#         ^ fg=#fbf1c7 fs=
#           ^ fg=#fbf1c7 fs=

        "C: #{e.message}"
#       ^ fg=#fbf1c7 fs=
#        ^^ fg=#b8bb26 fs=
#           ^^ fg=#8ec07c fs=
#             ^ fg=#b8bb26 fs=
#              ^ fg=#fbf1c7 fs=
#               ^^^^^^^ fg=#b8bb26 fs=
#                      ^ fg=#8ec07c fs=
#                       ^ fg=#fbf1c7 fs=

    end
  end
