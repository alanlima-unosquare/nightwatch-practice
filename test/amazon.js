module.exports = {
    'Demo test unosquare' : function() {
        browser.windowMaximize();
        let amazon = browser.page.amazon();
        amazon.navigate()
        .search();
        browser.end();
    }
}