module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  webdriver: {
    start_process: true,
    server_path: '',
    default_path_prefix: ''
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      webdriver: {
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless']
        }
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'docs/screenshots'
      }
    },
    firefox: {
      webdriver: {
        server_path: 'node_modules/.bin/geckodriver',
        port: 4444
      },
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['-headless']
        }
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'docs/screenshots'
      }
    },
    chrome_mobile: {
      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless'],
          mobileEmulation: {
            deviceName: 'Pixel 4'
          }
        }
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'docs/screenshots'
      }
    }
  }
};
