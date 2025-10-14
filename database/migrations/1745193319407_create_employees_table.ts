import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').references('id').inTable('contries').unsigned().notNullable()
      table.integer('agency_id').references('id').inTable('agencies').unsigned().notNullable()
      table.integer('creator_id').references('id').inTable('employees').unsigned().nullable()
      table.enum('role', ['commercial', 'agent', 'chiefAgency']).notNullable().defaultTo('agent')
      table.enum('type', ['internal', 'external']).notNullable().defaultTo('internal')
      table.string('first_name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table.string('address', 100).notNullable()
      table.string('city', 100).notNullable()
      table.string('tel', 100).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}