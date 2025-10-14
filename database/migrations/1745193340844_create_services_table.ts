import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').references('id').inTable('contries').unsigned().notNullable()
      table.integer('service_category_id').references('id').inTable('services_categories').unsigned().notNullable()
      table.integer('assignee_id').references('id').inTable('employees').unsigned().notNullable()
      table.enum('type', ['internal', 'external']).notNullable().defaultTo('internal')
      table.string('name', 100).notNullable()
      table.text('description').notNullable()
      table.float('price', 100).notNullable()
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