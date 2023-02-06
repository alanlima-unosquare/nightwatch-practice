module.exports = {
    'Demo test unosquare' : function() {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .useXpath()
      .waitForElementVisible('//img[@alt="unosquare logo"]')
      .assert.attributeContains('//a[@href="https://www.unosquare.com/blog/"]', 'class', 'nav')
      .assert.textContains('//a[@href="https://www.unosquare.com/blog/"]', 'Blog')
      .assert.attributeEquals('//span[text()="Contact Us" and parent::span]', 'class', 'elementor-button-text')
      .verify.cssProperty('//a[./span/span="Contact Us"]', 'background-color', 'rgba(48, 79, 243, 1)')
      .verify.visible('//span[text()="Join Us"]')
      .verify.titleEquals('Unosquare - Nearshore Software Engineers for your Digital Transformation - Unosquare')
      .verify.urlContains('unosquare')
      .verify.urlEquals('https://www.unosquare.com/')
      .end();
    }
  };