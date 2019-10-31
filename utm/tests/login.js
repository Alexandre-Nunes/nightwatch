module.exports = {
    'valdar utm=email-nc na campanha abandoned_cart com sucesso': function (browser) {

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
            .pause(5000)
            .waitForElementVisible('@form', 3000)
            .pause(5000)
        browser.url('https://br-store.acer.com/t/20/?utm_source=ShopBack&utm_medium=ShopTarget_abandonodecarrinho&utm_campaign=email-nc')
            .assert.urlContains('email-nc')
            .saveScreenshot('@screenschot')


    },

    'valdar utm=email-nc na campanha abandoned_session com sucesso': function (browser) {

        var login = browser.page.login()

        login
            .navigate()
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
            .waitForElementVisible('//li[contains(text(),"abandoned_session")]', 3000)
            .click('//li[contains(text(),"abandoned_session")]')
            .useCss()
            .click('@selectDummy')
            .click('@renderButton')
            .pause(5000)
            .waitForElementVisible('@form', 3000)
            .pause(5000)
             browser.url('https://br-store.acer.com/?utm_source=ShopBack&utm_campaign=email-nc&utm_medium=ShopTarget_abandonodenavegacao')
            .assert.urlContains('email-nc')
            .saveScreenshot('@screenschot')

    }
}

