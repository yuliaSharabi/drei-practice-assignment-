module.exports = {
  url: 'http://localhost:3000',
  elements: {
    // Relying on CSS selector: targeting the button that contains the text 'Connect Wallet'
    // Nightwatch supports simple CSS selectors; for text-based selection without XPath, 
    // we use the element structure.
    walletConnectButton: 'button.bg-indigo-600',
    mainLogo: 'nav a[href="/"]',
    heroImage: 'img[alt="Real Estate"]'
  }
};
