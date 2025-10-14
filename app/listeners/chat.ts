import transmit from '@adonisjs/transmit/services/main'

export default class Chat {
  handle(user: { id: number }) {
    // Send message
    transmit.broadcast(`users/${user.id}`, { message: 'Hello' })
  }
}
