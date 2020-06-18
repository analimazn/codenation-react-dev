module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        includeConsoleOutput: false
      },
    ],
  ],
}