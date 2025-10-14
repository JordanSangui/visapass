import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').references('id').inTable('customers').nullable()
      table.enum('type', ['customer', 'all']).notNullable().defaultTo('customer')
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