import {EventBus, useEventBus} from './EventBus'

import {SessionManager} from './SessionManager'
import {MatchMaker} from './MatchMaker'
import {SocketManager} from './SocketManager'

export function StartServer (...args) {
  let server = new Server(...args)
  server.init()
  return server
}

@useEventBus()
export class Server {
  constructor (nuxt, httpServer) {
    this.managers = {}
    this.eventBus = new EventBus()

    this.managers.socketManager = new SocketManager(httpServer)
    this.managers.sessionManager = new SessionManager()
    this.managers.matchMaker = new MatchMaker()
  }

  init () {
    for (let name in this.managers) {
      if (this.managers.hasOwnProperty(name)) {
        let manager = this.managers[name]
        // manager.init(this)
        this.eventBus.use(manager)
      }
    }

    this.eventBus.use(this)
    this.$emit('app', 'init', {})
  }

  onConnect () {

  }
}
