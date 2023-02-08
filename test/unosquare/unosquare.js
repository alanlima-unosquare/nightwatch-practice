module.exports = {
    'Demo test unosquare' : function() {
      browser.windowMaximize();
      let unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .main()
      .contactUnosquare();
      browser.end();
    }
  };