let validateContactUs = {
    contactUnosquare: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@contactUsA', 1000)
        .click('@contactUsA')
        .setValue('@companyTextField', 'QA CoE course')
        .setValue('@phoneTextField', '3300000000')
        .setValue('@messageTextArea', 'This is a Random Text used in a Course')
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg');
    }
}

let mainPage = {
    main: function() {
        return this.waitForElementVisible('@logoImg')
        .assert.attributeContains('@blogA', 'class', 'nav')
        .assert.textContains('@blogA', 'Blog')
        .assert.attributeEquals('@contactUsSpan', 'class', 'elementor-button-text')
        .assert.cssProperty('@contactUsA', 'background-color', 'rgba(48, 79, 243, 1)')
        .assert.visible('@joinUsSpan')
        .assert.titleEquals('Unosquare - Nearshore Software Engineers for your Digital Transformation - Unosquare')
        .assert.urlContains('unosquare');
    }
}

module.exports = {
url: 'https://www.unosquare.com',
commands: [validateContactUs, mainPage],
elements: {
    logoImg: '//img[@alt="unosquare logo"]',
    blogA: '//a[@href="https://www.unosquare.com/blog/"]',
    contactUsSpan: '//span[text()="Contact Us" and parent::span]',
    contactUsA: '//a[./span/span="Contact Us"]',
    joinUsSpan: '//span[text()="Join Us"]',
    fullNameInput: '//input[@name="firstname"]',
    
    companyTextField: {
        selector: "//input[@name='firstname']"
      },
      phoneTextField: {
        selector: "//input[@name='email']"
      },
      messageTextArea: {
        selector: "//textarea[@name='message']"
      },
      submitBtn: {
        selector: "//input[@value = 'Submit']",
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_email')]//label[contains(., 'Email must be formatted correctly.')]"
      }
}
}