const puppeteer = require('puppeteer-core');
const path = require('path');
const {
  CHROME_PATH,
  HTML_LOADED_IND,
  MB,
  ML,
  MR,
  MT,
  OUT_CN_FORMAT,
  OUT_CN,
  OUT_EN_FORMAT,
  OUT_EN,
  SRC_CN,
  SRC_EN,
} = require('./constants');

(async () => {
  const browser = await puppeteer.launch({
    product: 'chrome',
    executablePath: CHROME_PATH,
    args: [
      '--disable-extensions'
    ]
  });
  const page = await browser.newPage();
  const margin = {
    top: MT,
    right: MR,
    bottom: MB,
    left: ML
  };
  await page.goto('file://' + path.join(__dirname, SRC_EN), {
    waitUntil: HTML_LOADED_IND
  });
  await page.emulateMediaType('print');
  await page.pdf({
    path: OUT_EN,
    margin,
    format: OUT_EN_FORMAT
  });
  await page.goto('file://' + path.join(__dirname, SRC_CN), {
    waitUntil: HTML_LOADED_IND
  });
  await page.emulateMediaType('print');
  await page.pdf({
    path: OUT_CN,
    margin,
    format: OUT_CN_FORMAT
  });
  await browser.close();
})();
