let http = require('http')
let enableDestroy = require('server-destroy')
let chalk = require('chalk')
let Debug = require('debug')

const debug = Debug('nuxt:')
debug.color = 5

/*
From Nuxt 1.0.0-rc9
 */
function NuxtListenPatch (port = 3000, host = 'localhost') {
  // Update showOpen
  this.showOpen = () => {
    const _host = host === '0.0.0.0' ? 'localhost' : host
    // eslint-disable-next-line no-console
    console.log('\n' + chalk.bgGreen.black(' OPEN ') + chalk.green(` http://${_host}:${port}\n`))
  }

  const server = http.createServer(this.renderer.app)

  return this.applyPluginsAsync('before-listen', server)
    .then(() => new Promise((resolve, reject) => {
      server.listen({port, host, exclusive: false}, err => {
        /* istanbul ignore if */
        if (err) {
          return reject(err)
        }

        // Close server on nuxt close
        this.plugin('close', () => new Promise((resolve, reject) => {
          // Destroy server by forcing every connection to be closed
          server.destroy(err => {
            debug('server closed')
            /* istanbul ignore if */
            if (err) {
              return reject(err)
            }
            resolve()
          })
        }))

        resolve(this.applyPluginsAsync('listen', {server, port, host}))
      })

      // Add server.destroy(cb) method
      enableDestroy(server)
    }))
}

module.exports = function EventBeforeListen () {
  this.nuxt.listen = NuxtListenPatch
}
