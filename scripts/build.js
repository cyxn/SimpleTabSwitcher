const fs = require('fs');
const path = require('path');

(() => {
  fs.copyFileSync(path.resolve(__dirname, '../src/background.js'), path.resolve(__dirname, '../pt1/background.js'));
  fs.copyFileSync(path.resolve(__dirname, '../src/background.js'), path.resolve(__dirname, '../pt2/background.js'));
  fs.copyFileSync(path.resolve(__dirname, '../src/content.js'), path.resolve(__dirname, '../pt1/content.js'));
  fs.copyFileSync(path.resolve(__dirname, '../src/content.js'), path.resolve(__dirname, '../pt2/content.js'));
})();
