const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.port || 49001

async function start() {
  const config = require('./nuxt.config.js')

  // process.env.DEBUG = 'nuxt:*';
  const nuxt = new Nuxt(config)
  const builder = new Builder(nuxt)

  await builder.build().catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error)
    process.exit(1)
  })
  app.use(nuxt.render)
  app.listen(port)
}

start()
