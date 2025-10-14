import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'folders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('service_id').references('id').inTable('services').unsigned().notNullable()
      table.integer('customer_id').references('id').inTable('customers').unsigned().notNullable()
      table.integer('assignee_id').references('id').inTable('employees').unsigned().notNullable()
      table.string('name', 100).notNullable()
      table.text('description').notNullable()
      table.enum('status', ['created', 'waiting_approuval', 'in_progress', 'done', 'cancel']).notNullable().defaultTo('created')
      table.json('files').notNullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}