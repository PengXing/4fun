/**
 * sys.inherits & events.EventEmitter
 * @author sekiyika
 */

var events = require('events');
var sys = require('sys');

var Event = function() {
};
sys.inherits(Event, events.EventEmitter);


var env = new Event();

env.on('start', function() {
    console.log('start');
});

env.emit('start');
