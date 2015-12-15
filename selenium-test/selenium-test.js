var webdriverjs = require('webdriverjs');

var client = webdriverjs.remote({
    host: 'selenium',
    port: 4444,
    desiredCapabilities: {
      browserName: 'chrome'
    }
});

client.init();

client.url('https://github.com/')
  .getTitle(function(err, title) { console.log (title)}).call(function () {});

client.end();
