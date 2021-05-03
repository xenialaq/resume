module.exports = {
  CHROME_PATH: 'google-chrome',
  HTML_LOADED_IND: 'networkidle0',
  MB: '0.4in',
  ML: '0.4in',
  MR: '0.4in',
  MT: '0.4in',
  DOCUMENTS: [
    {
      name: 'cn',
      src: 'Qian_Ke_cn.html',
      out_format: 'A4',
      out: 'Qian_Ke_cn.pdf',
    },
    {
      name: 'en',
      src: 'Qian_Ke.html',
      out_format: 'Letter',
      out: 'Qian_Ke.pdf',
    },
    {
      name: 'cn-qt',
      src: 'Qian_Ke_cn_qt.html',
      out_format: 'A4',
      out: 'Qian_Ke_cn_qt.pdf',
    },
    {
      name: 'cn-2021',
      src: 'Qian_Ke_cn_2021.html',
      out_format: 'A4',
      out: 'Qian_Ke_cn_2021.pdf',
    },
  ],
  COMBO: [
    'Qian_Ke_en_cn.pdf', 'en', 'cn',
  ],
};
