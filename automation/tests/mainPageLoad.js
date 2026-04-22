const mainPage = browser.page.mainPage();

module.exports = {
  'Main Page Load Test': function (browser) {
    mainPage
      .navigate()
      .waitForElementVisible('@walletConnectButton', 5000);
      
    browser.assert.titleContains('DeFi Real Estate');
    
    browser.end();
  }
};
