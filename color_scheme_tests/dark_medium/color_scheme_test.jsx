// COLOR SCHEME TEST "gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme" "JavaScript (Babel)"

/* comment */
// ^^^^^^^ fg=#928374 fs=italic
//         ^^ fg=#928374 fs=italic

function render() {
	React.render(
		<TodoApp model={model}/>,
// ^^^^^^^ fg=#83a598 fs=
//         ^^^^^ fg=#fabd2f fs=
//              ^^ fg=#8ec07c fs=
//                ^^^^^ fg=#83a598 fs=
//                     ^ fg=#8ec07c fs=
//                      ^^ fg=#458588 fs=
//                        ^ fg=#ebdbb2 fs=

		document.getElementsByClassName('todoapp')[0]
		);
}

