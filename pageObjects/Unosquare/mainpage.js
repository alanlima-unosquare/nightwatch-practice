let validateContactUs = {
    contactUnosquare: function() {
      let form = getData();
        this.api.pause(1000);
        return this.waitForElementVisible('@contactUsA', 1000)
        .click('@contactUsA')
        .setValue('@firstNameInput', form.name)
        .setValue('@emailInput', form.email)
        .setValue('@messageTextArea', form.message)
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg');
    }
}

function getData() {
  return require('../../externalData/unosquareForm'); // Using the correct path is important
};

function getNames() {
  return require('../../externalData/names');
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

let last = {
  last: function() {
    this
    .click('@blogA');
    this.assert.textEquals('@header', 'Digital Transformation Blog');
    this.assert.urlEquals('https://www.unosquare.com/blog/')
    //READ ME, there is no search bar anymore so instead of doing that i loaded the names below from a json file
    .click('@aboutUsA');
    let people = getNames();
    for (const person of people) {
      let xpath = `//div[@class="elementor-image-box-wrapper"]//h3[text()="${person}"]`;
      this.assert.textEquals(xpath, person);
    }
    
    return this;
  }
}

module.exports = {
url: 'https://www.unosquare.com',
commands: [validateContactUs, mainPage, last],
elements: {
    logoImg: '//img[@alt="unosquare logo"]',
    blogA: '//a[@href="https://www.unosquare.com/blog/"]',
    contactUsSpan: '//span[text()="Contact Us" and parent::span]',
    contactUsA: '//a[./span/span="Contact Us"]',
    joinUsSpan: '//span[text()="Join Us"]',
    fullNameInput: '//input[@name="firstname"]',
    firstNameInput: "//input[@name='firstname']",
    emailInput: "//input[@name='email']",
    messageTextArea: "//textarea[@name='message']",
    submitBtn: "//input[@value = 'Submit']",
    nameWarningMsg: "//div[contains(@class, 'hs_email')]//label[contains(., 'Email must be formatted correctly.')]",
    header: '//h1',
    aboutUsA: '//nav[not(@aria-hidden="true")]//a[text()="About Us" and @class="elementor-item"]'
}
}