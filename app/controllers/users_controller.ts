import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'
import logger from '@adonisjs/core/services/logger'
import transmit from '@adonisjs/transmit/services/main'

export default class UsersController {
    index({ params, response }: HttpContext) {
        const id = params.id
        emitter.emit('user:registered', id)
        logger.error({ err: 'error test' }, 'Something went wrong')
        transmit.broadcast('global', { message: 'Hello' })
        return response.status(200).send(`Id : ${id}`)
    }

    async mail({ }: HttpContext) {
    }
}