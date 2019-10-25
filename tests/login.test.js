module.exports = {
    'login com sucesso': function(browser) {
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.waves-light', 3000)
        .end();
    }
}