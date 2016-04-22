module.exports = {
  invalidNonArrayScope: {
    settings: [{},
      {
        name: 'Invalid: Non-array Scope',
        scope: 'not an array',
      },
    ],
  },
  invalidEmptyScope: {
    settings: [{},
      {
        name: 'Invalid: Empty Scope',
        scope: [],
      },
    ],
  },
  invalidMissingName: {
    settings: [{},
      {
        scope: 'Invalid: Missing Name',
      },
    ],
  },

  invalidMissingSettings: {
    settings: [{},
      {
        name: 'Invalid: Missing Settings',
        scope: ['1'],
      },
    ],
  },
  invalidEmptySettings: {
    settings: [{},
      {
        name: 'Invalid: Empty Settings',
        scope: ['1'],
        settings: {},
      },
    ],
  },

  invalidUndefinedSetting: {
    settings: [{},
      {
        name: 'Invalid: Undefined Setting',
        scope: ['1'],
        settings: {
          foreground: undefined,
        },
      },
    ],
  },

  invalidDuplicateScope: {
    settings: [{},
      {
        name: 'Invalid: Duplicate Scope 1',
        scope: ['1'],
        settings: {
          foreground: 'a',
        },
      },
      {
        name: 'Invalid: Duplicate Scope 2',
        scope: ['1'],
        settings: {
          foreground: 'b',
        },
      },
    ],
  },

  validUnJoinedScopes: {
    settings: [{},
      {
        scope: ['3', '2', '1'],
        settings: {
          foreground: 'a',
        },
      },
    ],
  },
  validJoinedScopes: {
    settings: [{},
      {
        scope: '1, 2, 3',
        settings: {
          foreground: 'a',
        },
      },
    ],
  },

  validUnMinified: {
    settings: [{},
      {
        scope: ['3', '2', '1'],
        settings: {
          foreground: 'a',
        },
      },
      {
        scope: ['6', '5', '4'],
        settings: {
          foreground: 'a',
        },
      },
    ],
  },

  validMinified: {
    settings: [{},
      {
        scope: '3,2,1,6,5,4',
        settings: {
          foreground: 'a',
        },
      },
    ],
  },

};
