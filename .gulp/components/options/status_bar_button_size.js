module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonXxs],
      min_size: [45, 0],
    },

    // Extra Small
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonXs],
      min_size: [55, 0],
    },

    // Small
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonS],
      min_size: [65, 0],
    },

    // Default: [75, 0]

    // Large
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonL],
      min_size: [85, 0],
    },

    // Extra Large
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonXl],
      min_size: [95, 0],
    },

    // Extra Extra Large
    {
      class: 'status_button',
      settings: [stOpts.statusbarButtonXxl],
      min_size: [105, 0],
    },

  ];
};
