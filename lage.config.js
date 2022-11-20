module.exports = {
  pipeline: {
    build: [
      '^build'
    ],
    test: [
      'build'
    ],
    lint: {
      type: 'worker',
      options: {
        worker: 'scripts/eslint-worker.js',
      },
    },
  },
  npmClient: 'pnpm'
};
