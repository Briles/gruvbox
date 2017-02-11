#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
import json
import webbrowser

PACKAGE_NAME = 'gruvbox'
PACKAGE_VERSION = None


def format_version(module, attr, call=False):
    try:
        if call:
            version = getattr(module, attr)()
        else:
            version = getattr(module, attr)
    except Exception as e:
        print(e)
        version = 'Version could not be acquired!'
    if not isinstance(version, str):
        version = '.'.join([str(x) for x in version])
    return version

def get_support_info():
    pc_settings = sublime.load_settings('Package Control.sublime-settings')
    is_installed_by_pc = str(PACKAGE_NAME in set(pc_settings.get('installed_packages', [])))
    info = {}
    info['channel'] = sublime.channel()
    info['version'] = sublime.version()
    info['platform'] = sublime.platform()
    info['arch'] = sublime.arch()
    info['package_name'] = PACKAGE_NAME
    info['package_version'] = PACKAGE_VERSION
    info['pc_install'] = is_installed_by_pc
    try:
        import mdpopups
        info['mdpopups_version'] = format_version(mdpopups, 'version', call=True)
    except Exception:
        info['mdpopups_version'] = 'Version could not be acquired!'
    try:
        import markdown
        info['markdown_version'] = format_version(markdown, 'version')
    except Exception:
        info['markdown_version'] = 'Version could not be acquired!'
    try:
        import jinja2
        info['jinja_version'] = format_version(jinja2, '__version__')
    except Exception:
        info['jinja_version'] = 'Version could not be acquired!'
    try:
        import pygments
        info['pygments_version'] = format_version(pygments, '__version__')
    except Exception:
        info['pygments_version'] = 'Version could not be acquired!'
    return '''%(package_name)s:\n\n* version: %(package_version)s\n* installed via Package Control: %(pc_install)s\n\nSublime Text:\n\n* channel: %(channel)s\n* version: %(version)s\n* platform: %(platform)s\n* architecture: %(arch)s\n\nDependency versions:\n\n* mdpopups: %(mdpopups_version)s\n* markdown: %(markdown_version)s\n* pygments: %(pygments_version)s\n* jinja2: %(jinja_version)s''' % info

def plugin_loaded():
    pkg = json.loads(sublime.load_resource("Packages/" + PACKAGE_NAME + "/package.json"))
    global PACKAGE_VERSION
    PACKAGE_VERSION = pkg["version"]


class GruvboxIssues(sublime_plugin.TextCommand):

    def run(self, edit):
        if sublime.ok_cancel_dialog('Override current clipboard with support info and open browser to report issue?'):
            sublime.set_clipboard(get_support_info())
            webbrowser.open_new_tab('https://github.com/Briles/gruvbox/issues')


class GruvboxContributing(sublime_plugin.TextCommand):

    def run(self, edit):
        import mdpopups
        md = sublime.load_resource('Packages/' + PACKAGE_NAME + '/CONTRIBUTING.md')
        v = sublime.active_window().new_file()
        v.set_name(PACKAGE_NAME + ': CONTRIBUTING')
        v.settings().set('gutter', False)
        mdpopups.add_phantom(v, 'contributing', sublime.Region(0), md, sublime.LAYOUT_INLINE, wrapper_class='gruvbox-docs', on_navigate=self.on_navigate)
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
