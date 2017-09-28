import {useEventBus, event} from './EventBus'

import socketIO from 'socket.io'
import Wildcard from 'socketio-wildcard'

@useEventBus()
export class SocketManager {
  constructor (httpServer) {
    this.socket = socketIO.listen(httpServer)
    this.socket.use(Wildcard())
  }

  onSocketInput (eventName, data, cb, nsp) {
    console.log('onSocketInput >> ', arguments)
    this.$emit('client', 'test', {})
  }

  @event('init', 'app')
  init () {
    console.log('SocketManager::init')
    this.socket.on('connection', socket => {
      this.$emit('socket', 'connection', {socket})
      socket.on('*', ({data, nsp}) => this.onSocketInput(data[0], data[1], data[2], nsp))
    })
  }
}
