import { defineConfig } from '@adonisjs/transmit'

export default defineConfig({
  pingInterval: false,
  transport: null
})
// import env from '#start/env'
// import { defineConfig } from '@adonisjs/transmit'
// import { redis } from '@adonisjs/transmit/transports'

// export default defineConfig({
//   transport: {
//     driver: redis({
//       host: env.get('REDIS_HOST'),
//       port: env.get('REDIS_PORT'),
//       password: env.get('REDIS_PASSWORD', ''),
//       keyPrefix: 'transmit',
//     })
//   }
// })
