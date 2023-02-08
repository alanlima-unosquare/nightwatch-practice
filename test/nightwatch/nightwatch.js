/*
Go to https://nightwatchjs.org/
Click on Getting Started
In the Search Bart type and search for "Asserts"
Click on the First Result search option
assert the "API Commands" Header exists
Go to Blog
Scroll down to the bottom of the page and assert the following text exists: "Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors."
*/

module.exports = {
    'Nightwatch page test' : function() {
      browser
      .windowMaximize();
      
      let nightwatch = browser.page.landingpage();
      nightwatch.navigate()
      .assert.title('Nightwatch.js | Node.js powered End-to-End testing framework')
      .assert.urlEquals('https://nightwatchjs.org/')
      .assert.visible('@titleSpan')
      .click('@getStartedA')
      .click('@searchButton')
      .setValue('@searchInput', 'Asserts')
      .perform(function() {
        return this.actions().sendKeys("");
      })
      .click('@searchList')
      .assert.visible('@apiSpan')
      .click('@blogA')
      .sendKeys('@body', browser.Keys.END)
      .assert.textContains('@addressP', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.')
      .end();
    }
  };