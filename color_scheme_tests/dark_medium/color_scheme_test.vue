<!-- COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "Vue Component" -->

<template>
<!-- ^^^^ fg=#83a598 fs= -->
<!--     ^ fg=#458588 fs= -->

  <div>
<!-- ^ fg=#83a598 fs= -->
<!--  ^ fg=#458588 fs= -->

    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo"/>
<!-- ^^^^^^^^^^^^^ fg=#83a598 fs= -->
<!--               ^^^^^^^ fg=#fabd2f fs= -->
<!--                      ^^ fg=#ebdbb2 fs= -->
<!--                        ^^^^^^^^^^^ fg=#83a598 fs= -->
<!--                                   ^ fg=#ebdbb2 fs= -->
<!--                                     ^^^^^^^^^^^ fg=#fabd2f fs= -->
<!--                                                ^^ fg=#ebdbb2 fs= -->
<!--                                                  ^^^ fg=#b8bb26 fs= -->
<!--                                                      ^^^^ fg=#b8bb26 fs= -->
<!--                                                          ^ fg=#ebdbb2 fs= -->
<!--                                                            ^ fg=#d79921 fs= -->
<!--                                                             ^^^^^^^^^^^^^ fg=#fabd2f fs= -->
<!--                                                                          ^^ fg=#ebdbb2 fs= -->
<!--                                                                            ^^^^^^^ fg=#83a598 fs= -->
<!--                                                                                   ^ fg=#ebdbb2 fs= -->
<!--                                                                                    ^^ fg=#458588 fs= -->

    <ul v-if="todos.length">
<!-- ^^ fg=#83a598 fs= -->
<!--    ^^^^ fg=#fabd2f fs= -->
<!--        ^^ fg=#ebdbb2 fs= -->
<!--          ^^^^^ fg=#83a598 fs= -->
<!--               ^^^^^^^^ fg=#ebdbb2 fs= -->
<!--                       ^ fg=#458588 fs= -->

      <TodoListItem
        v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
<!--    ^^^^^ fg=#fabd2f fs= -->
<!--         ^^ fg=#ebdbb2 fs= -->
<!--           ^^^^ fg=#83a598 fs= -->
<!--                ^^ fg=#8ec07c fs= -->
<!--                   ^^^^^ fg=#83a598 fs= -->
<!--                        ^ fg=#ebdbb2 fs= -->
<!--                          ^ fg=#d79921 fs= -->
<!--                           ^^^ fg=#fabd2f fs= -->
<!--                              ^^ fg=#ebdbb2 fs= -->
<!--                                ^^^^ fg=#83a598 fs= -->
<!--                                    ^^^^ fg=#ebdbb2 fs= -->
<!--                                         ^ fg=#d79921 fs= -->
<!--                                          ^^^^ fg=#fabd2f fs= -->
<!--                                              ^^ fg=#ebdbb2 fs= -->
<!--                                                ^^^^ fg=#83a598 fs= -->
<!--                                                    ^ fg=#ebdbb2 fs= -->
<!--                                                      ^ fg=#d79921 fs= -->
<!--                                                       ^^^^^^ fg=#fabd2f fs= -->
<!--                                                             ^^ fg=#ebdbb2 fs= -->
<!--                                                               ^^^^^^^^^^ fg=#83a598 fs= -->
<!--                                                                         ^ fg=#ebdbb2 fs= -->
<!--                                                                           ^^ fg=#458588 fs= -->
    </ul>
    <p v-else> {{ 'test' }} </p>
<!-- ^ fg=#83a598 fs= -->
<!--   ^^^^^^ fg=#fabd2f fs= -->
<!--         ^ fg=#458588 fs= -->
<!--           ^^ fg=#ebdbb2 fs= -->
<!--              ^ fg=#ebdbb2 fs= -->
<!--               ^^^^ fg=#b8bb26 fs= -->
<!--                   ^ fg=#ebdbb2 fs= -->
<!--                     ^^ fg=#ebdbb2 fs= -->
<!--                        ^^ fg=#458588 fs= -->
<!--                          ^ fg=#83a598 fs= -->
<!--                           ^ fg=#458588 fs= -->

  </div>
</template>

<script></script>
<!-- ^^ fg=#83a598 fs= -->
<!--   ^^^ fg=#458588 fs= -->
<!--      ^^^^^^ fg=#83a598 fs= -->
<!--            ^ fg=#458588 fs= -->

<style lang="scss" scoped></style>
<!-- ^ fg=#83a598 fs= -->
<!--   ^^^^ fg=#fabd2f fs= -->
<!--       ^^ fg=#ebdbb2 fs= -->
<!--         ^^^^ fg=#b8bb26 fs= -->
<!--             ^ fg=#ebdbb2 fs= -->
<!--               ^^^^^^ fg=#fabd2f fs= -->
<!--                     ^^^ fg=#458588 fs= -->
<!--                        ^^^^^ fg=#83a598 fs= -->
<!--                             ^ fg=#458588 fs= -->
