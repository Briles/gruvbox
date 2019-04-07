const _ = require('lodash');
const chroma = require('chroma-js');
const palette = require('./palette.js');
const {
  color: _c,
  saturation: _s,
  greyscale: _gs,
  lightness: _l,
  blend: _b,
} = require('./sublime-color-functions.js');

function cmykChannel(x, z) {
  return 2 * z - x
}

function cmykLinear(base, expected) {
  return [
    cmykChannel(base[0], expected[0]),
    cmykChannel(base[1], expected[1]),
    cmykChannel(base[2], expected[2]),
    cmykChannel(base[3], expected[3]),
  ];
}

function adjust(base, expected, baseVar) {
  const _base = chroma(base);
  const _expected = chroma(expected);
  const mixee = chroma.cmyk(cmykLinear(_base.cmyk(), _expected.cmyk()));

  const _actual = chroma.mix(base, mixee);
  const _actualHsl = _actual.hsl().slice(1, -1);
  const _expectedHsl = _expected.hsl().slice(1, -1);

  const differences = _actualHsl.map((channel, idx) => {
    return channel - _expectedHsl[idx];
  });
  const saturationAdjustment = _.round(differences[0] * -100, 6).toString();
  const lightnessAdjustment = _.round(differences[1] * -100, 6).toString();

  return _l(_s(_b(baseVar, mixee.css('hsl'), 50, false), saturationAdjustment), lightnessAdjustment);
}

const bg = 'var(bg)';
const fg = 'var(fg)';

const common = {
  bg: 'var(--background)',
  background: 'var(bg)',
  bg0: 'var(bg)',

  bg_gs: _gs('var(bg)'),
  bg0_gs: _gs('var(bg0)'),

  fg: 'var(--foreground)',
  foreground: 'var(fg)',
  fg1: 'var(fg)',

  fg_gs: _gs('var(fg)'),
  fg1_gs: _gs('var(fg1)'),

  border: _l('var(bg)', '-10'),
  container: _l('var(bg)', '-5'),
  panelRow: _l('var(bg)', '+2.35'),
  borderSofter: _l('var(bg)', '+6.5'),
  containerSofter: _l('var(bg)', '+2.8'),

  icon_selected: 'var(fg)',
  icon_selected_gs: 'var(fg_gs)',

  close_hover: 'var(red)',

  dirty_default: 'var(yellow)',

  red: 'var(--redish)',
  orange: 'var(--orangish)',
  yellow: 'var(--yellowish)',
  green: 'var(--greenish)',
  aqua: 'var(--cyanish)',
  blue: 'var(--bluish)',
  purple: 'var(--purplish)',
};

const dark_bg_base = palette.dark.bg.medium;
const dark_fg_base = palette.dark.fg.medium;

const dark_bg1 = adjust(dark_bg_base, palette.dark.bg1, bg);
const dark_bg2 = adjust(dark_bg_base, palette.dark.bg2, bg);
const dark_bg3 = adjust(dark_bg_base, palette.dark.bg3, bg);
const dark_bg4 = adjust(dark_bg_base, palette.dark.bg4, bg);

const dark_bg1_gs = _gs(dark_bg1);
const dark_bg2_gs = _gs(dark_bg2);
const dark_bg3_gs = _gs(dark_bg3);
const dark_bg4_gs = _gs(dark_bg4);

const dark_gray = adjust(chroma.mix(dark_bg_base, dark_fg_base), palette.dark.gray, _b(bg, fg, 50));
const dark_gray_gs = _gs(dark_gray);

const dark_fg0 = adjust(dark_fg_base, palette.dark.fg1, fg);
const dark_fg2 = adjust(dark_fg_base, palette.dark.fg2, fg);
const dark_fg3 = adjust(dark_fg_base, palette.dark.fg3, fg);
const dark_fg4 = adjust(dark_fg_base, palette.dark.fg4, fg);

const dark_fg0_gs = _gs(dark_fg0);
const dark_fg2_gs = _gs(dark_fg2);
const dark_fg3_gs = _gs(dark_fg3);
const dark_fg4_gs = _gs(dark_fg4);

const darkVariables = {
  bg1: dark_bg1,
  bg2: dark_bg2,
  bg3: dark_bg3,
  bg4: dark_bg4,

  bg1_gs: dark_bg1_gs,
  bg2_gs: dark_bg2_gs,
  bg3_gs: dark_bg3_gs,
  bg4_gs: dark_bg4_gs,

  gray: dark_gray,
  gray_gs: dark_gray_gs,

  fg0: dark_fg0,
  fg2: dark_fg2,
  fg3: dark_fg3,
  fg4: dark_fg4,

  fg0_gs: dark_fg0_gs,
  fg2_gs: dark_fg2_gs,
  fg3_gs: dark_fg3_gs,
  fg4_gs: dark_fg4_gs,

  scrollbar: dark_bg1,

  icon_default: dark_bg4,
  icon_hover: dark_fg4,
  icon_default_gs: dark_bg4_gs,
  icon_hover_gs: dark_fg4_gs,

  folder_default: dark_gray,
  folder_hover: dark_fg2,
  folder_expanded: dark_fg2,

  folder_default_gs: dark_gray_gs,
  folder_hover_gs: dark_fg2_gs,
  folder_expanded_gs: dark_fg2_gs,

  close_default: dark_bg3,
  close_default_gs: dark_bg3_gs,

  tabbar_icon_default: dark_bg4,
  tabbar_icon_hover: dark_fg4,
  tabbar_icon_default_gs: dark_bg4_gs,
  tabbar_icon_hover_gs: dark_fg4_gs,
};

const light_bg_base = palette.light.bg.medium;
const light_fg_base = palette.light.fg.medium;

const light_bg1 = adjust(light_bg_base, palette.light.bg1, bg);
const light_bg2 = adjust(light_bg_base, palette.light.bg2, bg);
const light_bg3 = adjust(light_bg_base, palette.light.bg3, bg);
const light_bg4 = adjust(light_bg_base, palette.light.bg4, bg);

const light_bg1_gs = _gs(light_bg1);
const light_bg2_gs = _gs(light_bg2);
const light_bg3_gs = _gs(light_bg3);
const light_bg4_gs = _gs(light_bg4);

const light_gray = adjust(chroma.mix(light_bg_base, light_fg_base), palette.light.gray, _b(bg, fg, 50));
const light_gray_gs = _gs(light_gray);

const light_fg0 = adjust(light_fg_base, palette.light.fg1, fg);
const light_fg2 = adjust(light_fg_base, palette.light.fg2, fg);
const light_fg3 = adjust(light_fg_base, palette.light.fg3, fg);
const light_fg4 = adjust(light_fg_base, palette.light.fg4, fg);

const light_fg0_gs = _gs(light_fg0);
const light_fg2_gs = _gs(light_fg2);
const light_fg3_gs = _gs(light_fg3);
const light_fg4_gs = _gs(light_fg4);

const lightVariables = {
  bg1: light_bg1,
  bg2: light_bg2,
  bg3: light_bg3,
  bg4: light_bg4,

  bg1_gs: light_bg1_gs,
  bg2_gs: light_bg2_gs,
  bg3_gs: light_bg3_gs,
  bg4_gs: light_bg4_gs,

  gray: light_gray,
  gray_gs: light_gray_gs,

  fg0: light_fg0,
  fg2: light_fg2,
  fg3: light_fg3,
  fg4: light_fg4,

  fg0_gs: light_fg0_gs,
  fg2_gs: light_fg2_gs,
  fg3_gs: light_fg3_gs,
  fg4_gs: light_fg4_gs,

  scrollbar: light_bg1,

  icon_default: light_bg4,
  icon_hover: light_fg4,
  icon_default_gs: light_bg4_gs,
  icon_hover_gs: light_fg4_gs,

  folder_default: light_gray,
  folder_hover: light_fg2,
  folder_expanded: light_fg2,

  folder_default_gs: light_gray_gs,
  folder_hover_gs: light_fg2_gs,
  folder_expanded_gs: light_fg2_gs,

  close_default: light_bg3,
  close_default_gs: light_bg3_gs,

  tabbar_icon_default: light_bg4,
  tabbar_icon_hover: light_fg4,
  tabbar_icon_default_gs: light_bg4_gs,
  tabbar_icon_hover_gs: light_fg4_gs,
};

function dark(key) {
  return _.get(Object.assign({}, darkVariables, common), key);
}

function light(key) {
  return _.get(Object.assign({}, lightVariables, common), key);
}

module.exports = {
  common: common,
  dark: dark,
  light: light,
};
