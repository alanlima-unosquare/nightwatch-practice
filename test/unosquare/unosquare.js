module.exports = {
    'Demo test unosquare' : function() {
      browser.windowMaximize();
      let unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .waitForElementVisible('@logoImg')
      .assert.attributeContains('@blogA', 'class', 'nav')
      .assert.textContains('@blogA', 'Blog')
      .assert.attributeEquals('@contactUsSpan', 'class', 'elementor-button-text')
      .assert.cssProperty('@contactUsA', 'background-color', 'rgba(48, 79, 243, 1)')
      .assert.visible('@joinUsSpan')
      .assert.titleEquals('Unosquare - Nearshore Software Engineers for your Digital Transformation - Unosquare')
      .assert.urlContains('unosquare')
      .click('@contactUsA')
      .setValue('@fullNameInput', 'Full Name')
      .assert.not.cssProperty('@fullNameInput', 'background-color', 'rgba(48, 79, 243, 1)')
      .assert.urlEquals('https://www.unosquare.com/');
      browser.end();
    }
  };