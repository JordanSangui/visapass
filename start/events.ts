import emitter from '@adonisjs/core/services/emitter'
const Mail = () => import('#listeners/mail')
const Notification = () => import('#listeners/notification')
const Chat = () => import('#listeners/chat')

emitter.on('user:registered', [Mail, 'handle'])
emitter.on('user:notified', [Notification, 'handle'])
emitter.on('user:chat', [Chat, 'handle'])