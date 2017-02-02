#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
import webbrowser


PACKAGE_NAME = 'gruvbox'


def status_msg(msg):
    sublime.status_message(PACKAGE_NAME + ': ' + msg)

def plugin_loaded():
    from package_control import events

    if events.install(PACKAGE_NAME):
        status_msg('Installed %s' % events.install(PACKAGE_NAME))
    elif events.post_upgrade(PACKAGE_NAME):
        status_msg('Upgraded to %s' % events.post_upgrade(PACKAGE_NAME))

def plugin_unloaded():
    from package_control import events

    if events.pre_upgrade(PACKAGE_NAME):
        status_msg('Upgrading from %s' % events.pre_upgrade(PACKAGE_NAME))
    elif events.remove(PACKAGE_NAME):
        status_msg('Removing %s' % events.remove(PACKAGE_NAME))


class GruvboxChangelog(sublime_plugin.TextCommand):

    def run(self, edit):
        import mdpopups
        md = sublime.load_resource('Packages/' + PACKAGE_NAME + '/CHANGELOG.md')
        v = sublime.active_window().new_file()
        v.set_name(PACKAGE_NAME + ': CHANGELOG')
        v.settings().set('gutter', False)
        mdpopups.add_phantom(v, 'changelog', sublime.Region(0), md, sublime.LAYOUT_INLINE, wrapper_class='gruvbox-docs', on_navigate=self.on_navigate)
        v.set_read_only(True)
        v.set_scratch(True)

    def is_visible(self):
        try:
            import mdpopups
        except Exception as e:
            return False
        return (mdpopups.version() >= (1, 7, 3)) and (int(sublime.version()) >= 3118)

    def on_navigate(self, href):
        webbrowser.open_new_tab(href)


class GruvboxReadme(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab('https://github.com/Briles/gruvbox#readme')
