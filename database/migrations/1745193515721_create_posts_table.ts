import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('blog_id').references('id').inTable('blogs').unsigned().notNullable()
      table.integer('author_id').references('id').inTable('employees').unsigned().notNullable()
      table.string('name', 100).notNullable()
      table.string('image', 100).notNullable()
      table.text('message').notNullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}