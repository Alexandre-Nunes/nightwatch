module.exports = {
    'login com sucesso': function (browser) {
       
        var login = browser.page.login()

        login
            .setValue('@clienteInput', 'Acer')
            .click('@confirmaCliente')
            .click('@campanhaButton')
            .useXpath()
            .waitForElementVisible('//li[contains(text(),"abandoned_cart")]', 3000)
            .click('//li[contains(text(),"abandoned_cart")]')
            .useCss()
            .click('@selectDummy')
            .click('@renderButton')
            .pause(5000)
            .waitForElementVisible('@form', 3000)
             browser.url('https://br-store.acer.com/t/20/?utm_source=ShopBack&utm_medium=ShopTarget_abandonodecarrinho&utm_campaign=email-nc')
            .assert.urlContains('email-nc')
            .saveScreenshot('@screenschot')

            
    }
}

