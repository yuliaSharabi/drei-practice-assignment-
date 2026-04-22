module.exports = {
  url: 'http://localhost:3000',
  elements: {
    // The Connect Wallet button is inside Navbar, without a specific data-testid.
    // It contains the text "Connect Wallet".
    walletConnectButton: {
      selector: '//button[contains(text(), "Connect Wallet")]',
      locateStrategy: 'xpath'
    },
    mainLogo: 'nav a[href="/"]',
    heroImage: 'img[alt="Real Estate"]'
  }
};
