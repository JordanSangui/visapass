import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('agency_id').references('id').inTable('agencies').unsigned().nullable()
      table.integer('creator_id').references('id').inTable('employees').unsigned().nullable()
      table.enum('type', ['presentiel', 'remote'])
      table.string('link').nullable()
      table.string('full_address').nullable()
      table.text('description').notNullable()
      table.text('price').nullable()
      table.timestamp('started_at').notNullable()
      table.timestamp('ended_at').notNullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}