import { compose } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Searchable } from '@foadonis/magnify'

export default class Service extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare countryId: number

  @column()
  declare serviceCategoryId: number

  @column()
  declare assigneeId: number

  @column()
  declare type: string

  @column()
  declare category: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: string

  @column()
  declare files: string

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}