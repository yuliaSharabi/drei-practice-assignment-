// automation/page-objects/basePage.js
module.exports = {
  commands: [{
    navigate() {
      const { baseUrl } = require('../config/env');
      return this.api.url(baseUrl);
    },
    takeScreenshot(filename) {
      return this.api.saveScreenshot(`docs/screenshots/${filename}.png`);
    }
  }]
};
