module.exports = {
    'login com sucesso': function(browser) {
        browser
        
        ///////// Acessando a url ///////////////
        .url('http://admin-mail.chaordicsystems.com/')
        ///////// Realizando o login ////////////
        .setValue('input[name=email]', 'mail@chaordicsystems.com')
        .setValue('input[name=password]', 'gK*P-#TqDUSXZsfK*-7J')
        .click('.btn-large')
        //////// Acessando o RendererMax ////////
        .click('.tools')
        .useXpath()
        .click('//li//a[contains(text(),"Renderer MAX")]')
        .useCss()
        /////// Selecionanco o cliente //////////
        .click('.chosen-container')
        .setValue('input[type=text', 'Acer')
        .click('.active-result')
        .pause(3000)              
        //////// selecionando campanha ///////////
        .click('#type_chosen')
        .pause(3000)  
        .useXpath()
        .click('//li[contains(text(),"abandoned_cart")]')
        .useCss()
        .pause(3000)
        .click('#use_dummy_recs')
        .pause(3000)
        .click('.btn-primary')
        .pause(3000)
        .waitForElementVisible('#theSubject', 5000)
               
        //////// clicando no produto ////////////
        .url('https://br-store.acer.com/t/20/?utm_source=ShopBack&utm_medium=ShopTarget_abandonodecarrinho&utm_campaign=email-nc')
                       
        /////// validando parâmetros da url (nc) ////////
        .assert.urlContains('email-nc')
        .saveScreenshot('tests_output/client.png')
         
    } 
        
}

        
       
           // .assert.containsText(userInfo, 'Quilombo')
           
