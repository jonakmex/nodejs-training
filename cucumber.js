var common = [
    `--format ${
      process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
      }`,
    '--parallel 20',
    '--require ./build/tests/step-definitions/**/*.js',
    '--require ./build/tests/step-definitions/*.js',
    '--require ./build/tests/support/*.js',
    '--publish-quiet'
  ].join(' ');
  
  module.exports = {
    default: common,
  };