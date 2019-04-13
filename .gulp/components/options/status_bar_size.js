module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarXxs],
      content_margin: [12, 3, 12, 3],
    },

    // Extra Small Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarXs],
      content_margin: [12, 6, 12, 6],
    },

    // Small Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarS],
      content_margin: [12, 8, 12, 8],
    },

    // Large Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarL],
      content_margin: [12, 13, 12, 13],
    },

    // Extra Large Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarXl],
      content_margin: [12, 16, 12, 16],
    },

    // Extra Extra Large Status Bar
    {
      class: 'status_container',
      settings: [stOpts.statusbarXxl],
      content_margin: [12, 18, 12, 18],
    },

  ];
};
