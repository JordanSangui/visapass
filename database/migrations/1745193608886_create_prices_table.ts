import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').references('id').inTable('countries').unsigned().notNullable()
      table.string('name', 100).notNullable()
      table.string('image', 100).notNullable()
      table.text('description').nullable()
      table.float('price').notNullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}