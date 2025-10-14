import transmit from '@adonisjs/transmit/services/main'
import User from '#models/customer'

export default class Notification {
  handle(user: User) {
    // Send notification
    transmit.broadcast(`users/${user.id}`, { message: 'Hello' })
  }
}
