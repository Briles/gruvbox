const dark0_hard     = '#1D2021';
const dark0          = '#282828';
const dark0_soft     = '#32302F';
const dark1          = '#3C3836';
const dark2          = '#504945';
const dark3          = '#665C54';
const dark4          = '#7C6F64';

const gray           = '#928374';

const light0_hard    = '#F9F5D7';
const light0         = '#FBF1C7';
const light0_soft    = '#F2E5BC';
const light1         = '#EBDBB2';
const light2         = '#D5C4A1';
const light3         = '#BDAE93';
const light4         = '#A89984';

const bright_red     = '#FB4934';
const bright_green   = '#B8BB26';
const bright_yellow  = '#FABD2F';
const bright_blue    = '#83A598';
const bright_purple  = '#D3869B';
const bright_aqua    = '#8EC07C';
const bright_orange  = '#FE8019';

const neutral_red    = '#CC241D';
const neutral_green  = '#98971A';
const neutral_yellow = '#D79921';
const neutral_blue   = '#458588';
const neutral_purple = '#B16286';
const neutral_aqua   = '#689D6A';
const neutral_orange = '#D65D0E';

const faded_red      = '#9D0006';
const faded_green    = '#79740E';
const faded_yellow   = '#B57614';
const faded_blue     = '#076678';
const faded_purple   = '#8F3F71';
const faded_aqua     = '#427B58';
const faded_orange   = '#AF3A03';

const palette = {

  dark: {
    bg: {
      hard: dark0_hard,
      medium: dark0,
      soft: dark0_soft,
    },
    bg0: dark0,
    bg1: dark1,
    bg2: dark2,
    bg3: dark3,
    bg4: dark4,
    gray: gray,
    fg: {
      hard: light1,
      medium: light1,
      soft: light1,
    },
    fg0: light0,
    fg1: light1,
    fg2: light2,
    fg3: light3,
    fg4: light4,
    red: bright_red,
    green: bright_green,
    yellow: bright_yellow,
    blue: bright_blue,
    purple: bright_purple,
    aqua: bright_aqua,
    orange: bright_orange,
    red1: neutral_red,
    green1: neutral_green,
    yellow1: neutral_yellow,
    blue1: neutral_blue,
    purple1: neutral_purple,
    aqua1: neutral_aqua,
    orange1: neutral_orange,
  },

  light: {
    bg: {
      hard: light0_hard,
      medium: light0,
      soft: light0_soft,
    },
    bg0: light0,
    bg1: light1,
    bg2: light2,
    bg3: light3,
    bg4: light4,
    gray: gray,
    fg: {
      hard: dark1,
      medium: dark1,
      soft: dark1,
    },
    fg0: dark0,
    fg1: dark1,
    fg2: dark2,
    fg3: dark3,
    fg4: dark4,
    red: faded_red,
    green: faded_green,
    yellow: faded_yellow,
    blue: faded_blue,
    purple: faded_purple,
    aqua: faded_aqua,
    orange: faded_orange,
    red1: neutral_red,
    green1: neutral_green,
    yellow1: neutral_yellow,
    blue1: neutral_blue,
    purple1: neutral_purple,
    aqua1: neutral_aqua,
    orange1: neutral_orange,
  },

  brightRed: bright_red,
  brightGreen: bright_green,
  brightYellow: bright_yellow,
  brightBlue: bright_blue,
  brightPurple: bright_purple,
  brightAqua: bright_aqua,
  brightOrange: bright_orange,

  neutralRed: neutral_red,
  neutralGreen: neutral_green,
  neutralYellow: neutral_yellow,
  neutralBlue: neutral_blue,
  neutralPurple: neutral_purple,
  neutralAqua: neutral_aqua,
  neutralOrange: neutral_orange,

  fadedRed: faded_red,
  fadedGreen: faded_green,
  fadedYellow: faded_yellow,
  fadedBlue: faded_blue,
  fadedPurple: faded_purple,
  fadedAqua: faded_aqua,
  fadedOrange: faded_orange,

  accents: {
    red: {
      dark: bright_red,
      neutral: neutral_red,
      light: faded_red,
    },
    green: {
      dark: bright_green,
      neutral: neutral_green,
      light: faded_green,
    },
    yellow: {
      dark: bright_yellow,
      neutral: neutral_yellow,
      light: faded_yellow,
    },
    blue: {
      dark: bright_blue,
      neutral: neutral_blue,
      light: faded_blue,
    },
    purple: {
      dark: bright_purple,
      neutral: neutral_purple,
      light: faded_purple,
    },
    aqua: {
      dark: bright_aqua,
      neutral: neutral_aqua,
      light: faded_aqua,
    },
    orange: {
      dark: bright_orange,
      neutral: neutral_orange,
      light: faded_orange,
    },
  },
};

module.exports = palette;
