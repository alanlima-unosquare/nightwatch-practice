module.exports = {
    before: function (browser) {
    },

    'NASA - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=DEMO_KEY'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200');
            browser.assert.equal(response.body[0].gstID, '2016-01-21T03:00:00-GST-001');
            browser.assert.equal(response.body[0].link, 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/10074/-1');
        });
    },
    

    'NASA - GET Negative': function (browser) {
        var apiUrl = 'https://images-api.nasa.gov/search?q=heywow'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200');
            browser.assert.equal(response.body.collection.metadata.total_hits, 0);
        });
    },

    'reqres - POST Positive': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        browser.apiPost(apiUrl, {"job": "leader", "name": "morpheus"}, function (response) {
            browser.assert.equal(response.statusCode, '201');
            browser.assert.equal(response.body.name, 'morpheus');
            browser.assert.equal(response.body.job, 'leader');
        });
    },
};