var util = require('util');
var events = require('events');

function apiPost () {}
util.inherits(apiPost, events.EventEmitter);

apiPost.prototype.command = function(apiUrl, body, success) {
  var request = require("superagent");

  request.post(apiUrl)
  .send(body)
  .then(success);
};

module.exports = apiPost;