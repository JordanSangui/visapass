import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('conversation_id').references('id').inTable('conversations').unsigned().notNullable()
      table.integer('sender_id').references('id').inTable('users').unsigned().notNullable()
      table.integer('receiver_id').references('id').inTable('users').unsigned().notNullable()
      table.text('message').notNullable()
      table.enum('status', ['created', 'read']).notNullable().defaultTo('created')
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}