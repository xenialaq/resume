const puppeteer = require('puppeteer-core');
const path = require('path');
const {
  CHROME_PATH,
  HTML_LOADED_IND,
  MB,
  ML,
  MR,
  MT,
  DOCUMENTS,
} = require('./constants');

const buildPdf = async ({
  page,
  margin,
  src,
  out_format: outFormat,
  out,
}) => {
  await page.goto(`file://${path.join(__dirname, '..', src)}`, {
    waitUntil: HTML_LOADED_IND,
  });
  await page.emulateMediaType('print');
  await page.pdf({
    path: out,
    margin,
    format: outFormat,
  });
};
(async () => {
  const browser = await puppeteer.launch({
    product: 'chrome',
    executablePath: CHROME_PATH,
    args: [
      '--disable-extensions',
    ],
  });
  const page = await browser.newPage();
  const margin = {
    top: MT,
    right: MR,
    bottom: MB,
    left: ML,
  };
  for (let i = 0; i < DOCUMENTS.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await buildPdf({ page, margin, ...DOCUMENTS[i] });
  }
  await browser.close();
})();
