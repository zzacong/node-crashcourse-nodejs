const EventEmitter = require('events')

// CREATE CLASS
class MyEmitter extends EventEmitter {}
// INIT OBJECT
const myEmitter = new MyEmitter()

// EVENT LISTENER
myEmitter.on('boom', () => console.log('Event Fired!'))

// EMIT EVENT
myEmitter.emit('boom')
myEmitter.emit('boom')
myEmitter.emit('boom')
