const mainPage = browser.page.mainPage();

module.exports = {
  after: function(browser) {
    browser.end();
  },

  'Main Page Load Test': function (browser) {
    mainPage
      .navigate()
      .waitForElementVisible('@walletConnectButton', 5000)
      .assert.visible('@mainLogo')
      .assert.visible('@heroImage');
      
    browser.assert.titleContains('DeFi Real Estate');
  }
};
