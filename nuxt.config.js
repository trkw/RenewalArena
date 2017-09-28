module.exports = {
  head: {
    title: 'renewal-arena',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description', content: 'naruto-arena style.'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '@/assets/reset.less',
    '@/assets/style.less',
    '@/assets/layout.less'
  ],
  plugins: [
    '~plugins/components.js',
    {src: '~plugins/socket.js', ssr: false},
    {src: '~plugins/actions.js', ssr: false}
  ],
  loading: {color: '#3B8070'},
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    watch: [
      '~/server'
    ]
  },
  modules: [
    '~/modules/event-before-listen',
    '~/server'
  ]
}
