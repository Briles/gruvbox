module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentXxs],
      indent: 4,
    },

    // Extra Small Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentXs],
      indent: 8,
    },

    // Small Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentS],
      indent: 12,
    },

    // Large Status Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentL],
      indent: 20,
    },

    // Extra Large Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentXl],
      indent: 24,
    },

    // Extra Extra Large Sidebar Indent
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarIndentXxl],
      indent: 28,
    },

  ];
};
