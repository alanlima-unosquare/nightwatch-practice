let search = {
    search: function() {
        this
        .click('@searchInput')
        .sendKeys('@searchInput', 'Samsung Galaxy Note 20')
        .sendKeys('@searchInput', browser.Keys.ENTER)
        .waitForElementVisible('@atLeastOneItem');
        let price = this.getText('@listItemPrice');
        this.click('@listItemLink')
        let price2 = this.getText('@itemDetailsPrice');
        browser.assert.equal(price2, price);
        this.click('@addToCart')
        .click('@cartA');
        let price3 = this.getText('@cartItemPrice');
        browser.assert.equal(price3, price);
        return this.click('@cartItemDelete');
    }
}

module.exports = {
    url: 'https://www.amazon.com/',
    commands: [search],
    elements: {
        searchInput: '//input[@id="twotabsearchtextbox"]',
        listItemLink: '//div[contains(@data-cel-widget,"search_result")][2]//h2//a',
        listItemPrice: '//div[contains(@data-cel-widget,"search_result")][2]//span[@class="a-price"]//span[@class="a-offscreen"]',
        atLeastOneItem: '//div[contains(@data-cel-widget,"search_result")]//h2//span[contains(., "Samsung Galaxy Note 20")]',
        itemDetailsPrice: '(//span[contains(@class,"apexPriceToPay")])[1]',
        addToCart: '(//input[@id="add-to-cart-button"])[1]',
        cartA: '//a[@id="nav-cart"]',
        cartItemPrice: '//span[contains(@class, "sc-product-price")]',
        cartItemDelete: '//input[@data-action="delete"]'
    }
}