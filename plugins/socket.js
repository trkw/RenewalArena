import io from 'socket.io-client'
import wildcard from 'socketio-wildcard'
import {FlattenObject} from '../utils/object.utils'
import {CreateContext} from '../utils/plugin.helpers'
import uuid from 'uuid'
import events from '../events'
import Vue from 'vue'

const mixin = {
  created () {
    let self = this
    if (this.$options && this.$options.onSocket) {
      let onSocket = this.$options.onSocket
      for (let key in onSocket) {
        if (onSocket.hasOwnProperty(key)) {
          onSocket[key].call(self, {data: 15})
        }
      }
    }
  }
}

Vue.mixin(mixin)

export default (session, inject) => {
  const eventList = FlattenObject(events)
  let ssid = localStorage.getItem('ra-ssid')
  if (!ssid) {
    ssid = uuid()
    localStorage.setItem('ra-ssid', ssid)
  }
  let socket = io('', {query: {'ssid': ssid}})
  inject('socket', socket)
  wildcard(io.Manager)(socket)

  socket.on('*', ({data}) => {
    let event = data[0]
    let info = data[1]
    if (eventList[event]) {
      eventList[event](CreateContext(session), info)
    }
  })
}
