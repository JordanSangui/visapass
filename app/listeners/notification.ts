import transmit from '@adonisjs/transmit/services/main'

export default class Notification {
  handle(user: { id: number }) {
    // Send notification
    transmit.broadcast(`users/${user.id}`, { message: 'Hello' })
  }
}
