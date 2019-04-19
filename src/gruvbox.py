import math
import sublime
import sublime_plugin

class GruvboxSelect(sublime_plugin.TextCommand):
    def run(self, action):
        color_schemes = sublime.find_resources("gruvbox*.sublime-color-scheme")
        color_themes = sublime.find_resources("gruvbox.sublime-theme")

        temp_schemes = []
        self.themes = []
        self.schemes = []

        for scheme in color_schemes:
            if 'Packages/gruvbox/' in scheme:
                temp_schemes.append(scheme[17:-21])

        for i in range(len(temp_schemes)):
            if (i % 2) == 0:
                self.schemes.insert(i + 1, temp_schemes[i])
            else:
                self.schemes.insert(i - 1, temp_schemes[i])

        for theme in color_themes:
            if 'Packages/gruvbox/' in theme:
                self.themes.append(theme[17:])

        self.show_panel()

    def show_panel(self):
        self.view.window().show_quick_panel(self.schemes, self.on_done, on_highlight=self.on_highlighted)

    def on_done(self, index):
        self.set_scheme('Packages/gruvbox/' + self.schemes[index] + '.sublime-color-scheme')
        self.set_theme(self.themes[0])
        self.save_settings(self.schemes[index])

    def on_highlighted(self, index):
        self.set_scheme('Packages/gruvbox/' + self.schemes[index] + '.sublime-color-scheme')
        self.set_theme(self.themes[0])

    def set_scheme(self, scheme):
        self.get_settings().set('color_scheme', scheme)

    def set_theme(self, theme):
        self.get_settings().set('theme', theme)

    def get_settings(self):
        return sublime.load_settings('Preferences.sublime-settings')

    def save_settings(self, theme):
        sublime.save_settings('Preferences.sublime-settings')
        sublime.status_message('gruvbox: ' + theme)
        print('')
        print('[gruvbox] ' +  theme)
        print('')
