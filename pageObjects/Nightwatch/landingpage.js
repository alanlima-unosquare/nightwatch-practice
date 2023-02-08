let checkBlog = {
    checkBlog: function() {
        return this.click('@blogA')
        .sendKeys('@body', browser.Keys.END)
        .assert.textContains('@addressP', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.');
    }
}

module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [checkBlog],
    elements: {
        getStartedA: '//a[text()="Get started"]',
        searchButton: '//button[@class="DocSearch DocSearch-Button"]',
        searchList: '//ul[@id="docsearch-list"]/li[1]/a',
        apiSpan: '//div[@class="nav-item"]/a/span[contains(text(),"API")]',
        blogA: '//div[@class="nav-item"]/a[contains(text(),"Blog")]',
        body: '//body',
        addressP: '//p[@class="address"]',
        titleSpan: '//span[@class="nightwatch-title"]',
        searchInput: '//input[@class="DocSearch-Input"]'
    }
}