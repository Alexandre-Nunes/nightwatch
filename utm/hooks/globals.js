module.exports = {
    // '@disabled': true,
     beforeEach: function (browser, done) {
      var login = browser.page.login()

       browser.resizeWindow(1920, 1080)

       login
       .navigate()
       .setValue('@nameInput', 'mail@chaordicsystems.com')
       .setValue('@passInput', 'gK*P-#TqDUSXZsfK*-7J')
       .click('@loginButton')
       .click('@toolsButton')
       .useXpath()
       .waitForElementVisible('//li//a[contains(text(),"Renderer MAX")]', 5000)
       .click('//li//a[contains(text(),"Renderer MAX")]')
       .useCss()
       .click('@clienteButton')
        done()
     },
 
     afterEach: function (browser, done) {
         browser.end()
         done()
     }
 }