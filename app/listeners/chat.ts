import transmit from '@adonisjs/transmit/services/main'
import User from '#models/customer'

export default class Chat {
  handle(user: User) {
    // Send message
    transmit.broadcast(`users/${user.id}`, { message: 'Hello' })
  }
}
