module.exports = {
    'Demo test amazon' : function() {
        browser.windowMaximize();
        let amazon = browser.page.amazon();
        amazon.navigate()
        .search();
        browser.end();
    }
}