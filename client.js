'use strict';
var osc = require('../lib');

var client = new osc.Client('127.0.0.1', 3333);
client.send('/oscAddress', 1, 1, 2, 3, 5, 8, function (err) {
  if (err) {
    console.error(new Error(err));
  }
  client.kill();
});

// or
// var msg =  new osc.Message('/address')
// msg.append("testing");
// msg.append("testing");
// msg.append(123);
// client.send(msg)

// or
// var msg = new osc.Message('/address', 1, 2, 3);
// client.send(msg);
