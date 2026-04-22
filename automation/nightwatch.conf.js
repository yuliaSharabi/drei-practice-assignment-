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
      }
    }
  }
};
