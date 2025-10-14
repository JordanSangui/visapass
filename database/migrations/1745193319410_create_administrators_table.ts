import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'administrators'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('employee_id').references('id').inTable('employees').unsigned().notNullable()
      table.integer('creator_id').references('id').inTable('employees').unsigned().nullable()
      table.enum('role', ['admin', 'root']).notNullable().defaultTo('internal')
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}