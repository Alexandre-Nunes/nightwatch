module.exports = {
    'login com sucesso': function (browser) {
       
        var login = browser.page.login()

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
            .setValue('@clienteInput', 'Acer')
            .click('@confirmaCliente')
            .click('@campanhaButton')
            .useXpath()
            .waitForElementVisible('//li[contains(text(),"abandoned_cart")]', 3000)
            .click('//li[contains(text(),"abandoned_cart")]')
            .useCss()
            .click('@selectDummy')
            .click('@renderButton')
            .pause(3000)
            .waitForElementVisible('@form', 3000)
            //.url('https://br-store.acer.com/t/20/?utm_source=ShopBack&utm_medium=ShopTarget_abandonodecarrinho&utm_campaign=email-nc')
            //.assert.urlContains('@assertnc')
            //.saveScreenshot('@screenschot')
    }
}

