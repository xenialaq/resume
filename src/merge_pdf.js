const {
  spawn,
} = require('child_process');
const {
  DOCUMENTS,
  COMBO,
} = require('./constants');

const { error, log } = console;

(async () => {
  const sources = DOCUMENTS
    .filter(({ name }) => COMBO.slice(1).includes(name))
    .map(({ out }) => out);
  const pdftk = spawn('pdftk', [
    ...sources, 'cat', 'output', COMBO[0],
  ]);

  pdftk.stderr.on('data', (data) => {
    error(data.toString());
  });

  pdftk.on('close', (code) => {
    log(`child process exited with code ${code}`);
  });
})();
