import faker from 'faker'

import {event, useEventBus} from './EventBus'
import {getWithDefault} from '../utils/base'

@useEventBus()
export class SessionManager {
  constructor () {
    this.sessions = {}
  }

  @event('init', 'app')
  init (parent) {
    console.log('SessionManager')
  }

  getSession (ssid) {
    return getWithDefault(this.sessions, ssid, {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.exampleEmail()
    })
  }

  @event('connection', 'socket')
  onSocketConnection ({socket}) {
    let ssid = socket.handshake.query.ssid
    console.log(this.getSession(ssid))
  }
}
