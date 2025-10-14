import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'agencies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').references('id').inTable('countries').unsigned().notNullable()
      table.integer('chief_id').references('id').inTable('employees').unsigned().nullable()
      table.string('name', 100).notNullable()
      table.string('address', 100).notNullable()
      table.string('city', 100).notNullable()
      table.string('tel', 100).notNullable()
      table.string('siret', 100).notNullable()
      table.json('opening_hours').notNullable()
      table.string('iban', 100).notNullable()
      table.string('bic_swift', 100).nullable()
      table.string('rib_bank_code', 100).nullable()
      table.string('rib_bank_office', 100).nullable()
      table.string('rib_account_number', 100).nullable()
      table.string('rib_key', 100).nullable()
      table.boolean('visible').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}