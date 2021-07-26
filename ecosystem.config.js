module.exports = {
  _apps: [
    {
      name: 'mahdiyyamudhiah',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
  get apps() {
    return this._apps
  },
  set apps(value) {
    this._apps = value
  },
}
