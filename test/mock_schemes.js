module.exports = {
  invalidNonArrayScope: {
    rules: [
      {
        name: 'name',
        scope: 'not an array',
      },
    ],
  },
  invalidEmptyScope: {
    rules: [
      {
        name: 'name',
        scope: [],
      },
    ],
  },
  invalidMissingName: {
    rules: [
      {
        scope: 'scope',
      },
    ],
  },

  invalidMissingStyles: {
    rules: [
      {
        name: 'name',
        scope: ['1'],
      },
    ],
  },

  invalidUndefinedStyle: {
    rules: [
      {
        name: 'name',
        scope: ['1'],
        foreground: undefined,
      },
    ],
  },

  invalidDuplicateScope: {
    rules: [
      {
        name: 'name',
        scope: ['1'],
        foreground: 'a',
      },
      {
        name: 'name',
        scope: ['1'],
        foreground: 'b',
      },
    ],
  },

  validUnJoinedScopes: {
    rules: [
      {
        scope: ['3', '2', '1'],
        foreground: 'a',
      },
    ],
  },
  validJoinedScopes: {
    rules: [
      {
        scope: '1,2,3',
        foreground: 'a',
      },
    ],
  },

  validUnMinified: {
    rules: [
      {
        scope: ['3', '2', '1'],
        foreground: 'a',
      },
      {
        scope: ['6', '5', '4'],
        foreground: 'a',
      },
    ],
  },

  validMinified: {
    rules: [
      {
        scope: '3,2,1,6,5,4',
        foreground: 'a',
      },
    ],
  },

};
