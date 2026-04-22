module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  webdriver: {
    start_process: true,
    server_path: '',
    port: 9515,
    cli_args: ['--port=9515'],
    default_path_prefix: ''
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      webdriver: {
        start_process: true,
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
        start_process: true,
        server_path: 'node_modules/.bin/geckodriver',
        port: 4444
      },
      desiredCapabilities: {
        browserName: 'firefox'
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'docs/screenshots'
      }
    }
  }
};
