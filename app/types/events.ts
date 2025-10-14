declare module '@adonisjs/core/types' {
  export interface EventsList {
    'user:registered': { id: number }
    'user:notified': { id: number }
    'user:chat': { id: number }
  }
}
