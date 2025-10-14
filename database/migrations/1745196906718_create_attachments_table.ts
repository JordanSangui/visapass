import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attachments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('folder_id').references('id').inTable('folders').unsigned().notNullable()
      table.integer('creator_customer_id').references('id').inTable('customers').unsigned().nullable()
      table.integer('creator_employee_id').references('id').inTable('employees').unsigned().nullable()
      table.enum('creator', ['customer', 'employee']).notNullable().defaultTo('customer')
      table.string('name', 100).notNullable()
      table.text('description').nullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}