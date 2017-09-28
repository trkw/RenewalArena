require('babel-register')

let {StartServer} = require('./Server')

module.exports = function ServerSocketIO () {
  this.nuxt.plugin('before-listen', (server) => {
    StartServer(this.nuxt, server)
  })
}
