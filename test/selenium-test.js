var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote({
    host: 'selenium',
    port: 4444,
    desiredCapabilities: {
      browserName: 'chrome'
    }
});

client
    .init()
    .url('http://app:8000')
    .getTitle().then(function(title) {
        console.log("The title is:");
        console.log(title);
    }) 
    .getHTML('#desc').then(function(html) {
        console.log("\nThe HTML element with ID 'info' is:")
        console.log(html);
    }) 
    .end();
