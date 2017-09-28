function send (socket) {
  return function send (event, data, promise = false) {
    return new Promise((resolve) => {
      if (promise) {
        socket.emit(event, data, (...args) => {
          resolve(args)
        })
      } else {
        socket.emit(event, data)
      }
    })
  }
}

export function CreateContext (session) {
  let {store, app} = session
  return {
    ...session,

    // Store
    getters: store.getters,
    commit: store.commit,
    state: store.state,

    // Socket
    socket: app.$socket,
    send: send(app.$socket)
  }
}
