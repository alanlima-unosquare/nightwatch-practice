/*
Go to https://nightwatchjs.org/
Click on Getting Started
In the Search Bart type and search for "Asserts"
Click on the First Result search option
Verify the "API Commands" Header exists
Go to Blog
Scroll down to the bottom of the page and verify the following text exists: "Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors."
*/

module.exports = {
    'Nightwatch page test' : function() {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .useXpath()
      .click('//a[text()="Get started"]')
      .click('//button[@class="DocSearch DocSearch-Button"]')
      .perform(function() {
        return this.actions().sendKeys("Asserts");
      })
      .click('//ul[@id="docsearch-list"]/li[1]/a')
      .verify.visible('//div[@class="nav-item"]/a/span[contains(text(),"API")]')
      .click('//div[@class="nav-item"]/a[contains(text(),"Blog")]')
      .sendKeys('//body', browser.Keys.END)
      .verify.textContains('//p[@class="address"]', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.')
      .end();
    }
  };