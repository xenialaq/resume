const {
  spawn,
} = require('child_process');
const {
  OUT_CN,
  OUT_EN_CN,
  OUT_EN,
} = require('./constants');

const { error, log } = console;

(async () => {
  const pdftk = spawn('pdftk', [
    OUT_EN, OUT_CN, 'cat', 'output', OUT_EN_CN,
  ]);

  pdftk.stderr.on('data', (data) => {
    error(data.toString());
  });

  pdftk.on('close', (code) => {
    log(`child process exited with code ${code}`);
  });
})();
