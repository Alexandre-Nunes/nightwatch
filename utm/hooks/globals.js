module.exports = {
    // '@disabled': true,
     beforeEach: function (browser, done) {
       browser.resizeWindow(1920, 1080)
       done()
     },
 
     afterEach: function (browser, done) {
         browser.end()
         done()
     }
 }