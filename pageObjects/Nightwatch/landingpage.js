module.exports = {
    url: 'https://nightwatchjs.org/',
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