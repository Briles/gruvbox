module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Small Scrollbar Width

    // Vertical Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthXs],
      content_margin: [6, 16],
    },

    // Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthXs],
      attributes: ['horizontal'],
      content_margin: [16, 6],
    },

    // Small Scrollbar Width

    // Vertical Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthS],
      content_margin: [7, 16],
    },

    // Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthS],
      attributes: ['horizontal'],
      content_margin: [16, 7],
    },

    // Large Scrollbar Width

    // Vertical Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthL],
      content_margin: [9, 16],
    },

    // Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthL],
      attributes: ['horizontal'],
      content_margin: [16, 9],
    },

    // Extra Large Scrollbar Width

    // Vertical Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthXl],
      content_margin: [10, 16],
    },

    // Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      settings: [stOpts.scrollbarWidthXl],
      attributes: ['horizontal'],
      content_margin: [16, 10],
    },

  ];
};
