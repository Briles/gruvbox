const themeVariables = require('./theme-variables.js');

function animatedIconFolder(base) {
  return {
    keyframes: [
      `${base}folder__literal--hover.png`,
      `${base}folder__literal--hover_0.png`,
      `${base}folder__literal--hover_1.png`,
      `${base}folder__literal--hover_2.png`,
      `${base}folder__literal--hover_3.png`,
    ],
    loop: false,
    frame_time: 0.037,
  };
}

function animatedPanelButtonControl(base) {
  return {
    keyframes: [
      `${base}panels--hover.png`,
      `${base}panels--hover_0.png`,
      `${base}panels--hover_1.png`,
      `${base}panels--hover_2.png`,
      `${base}panels--hover_3.png`,
      `${base}panels--hover_4.png`,
      `${base}panels--hover_5.png`,
      `${base}panels--hover_6.png`,
      `${base}panels--hover_7.png`,
      `${base}panels--hover_8.png`,
      `${base}panels--hover_9.png`,
      `${base}panels--hover_10.png`,
      `${base}panels--hover_11.png`,
      `${base}panels--hover_11.png`,
      `${base}panels--hover_11.png`,
      `${base}panels--hover_11.png`,
      `${base}panels--hover_11.png`,
      `${base}panels--hover_10.png`,
      `${base}panels--hover_9.png`,
      `${base}panels--hover_8.png`,
      `${base}panels--hover_7.png`,
      `${base}panels--hover_6.png`,
      `${base}panels--hover_5.png`,
      `${base}panels--hover_4.png`,
      `${base}panels--hover_3.png`,
      `${base}panels--hover_2.png`,
      `${base}panels--hover_1.png`,
      `${base}panels--hover_0.png`,
      `${base}panels--hover.png`,
    ],
    loop: false,
    frame_time: 0.067,
  };
}

// file_light
// file_medium
// file_medium_dark
// file_dark
function createComponentVariations(componentCreationFn) {
  const luminosities = {
    'file_light': themeVariables.light,
    'file_medium': themeVariables.light,
    'file_medium_dark': themeVariables.dark,
    'file_dark': themeVariables.dark,
  };

  return Object.keys(luminosities).map((luminosity) => {
    return componentCreationFn(luminosity, luminosities[luminosity]);
  });
}

const mixins = {
  animatedIconFolder: animatedIconFolder,
  animatedPanelButtonControl: animatedPanelButtonControl,
  createComponentVariations: createComponentVariations,
};

module.exports = mixins;
