/**
 * Skip bundled Chromium download during `npm install` (whatsapp-web.js → puppeteer).
 * Use system Chrome, set PUPPETEER_EXECUTABLE_PATH, or run `npx puppeteer browsers install chrome`.
 */
module.exports = {
  skipDownload: true,
};

