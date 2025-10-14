import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').references('id').inTable('contries').unsigned().notNullable()
      table.integer('agent_id').references('id').inTable('employees').unsigned().nullable()
      table.string('full_name', 100).notNullable()
      table.string('tel', 100).nullable()
      table.string('email', 100).nullable()
      table.string('services', 250).notNullable() // ['avi', 'logement', 'suivie', 'assurances', 'billeterie', 'partenariat']
      table.text('message').notNullable()
      table.text('response').nullable()
      table.enum('status', ['created', 'replied']).notNullable().defaultTo('created')
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}