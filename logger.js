const EventEmitter = require('events')
const uuid = require('uuid')

// console.log('uuid: ', uuid.v4())

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg })
  }
}

module.exports = Logger

const logger = new Logger()

logger.on('message', data => console.log('Called listener: ', data))

logger.log('Hello World')
logger.log('Hi')
logger.log('Hello')
