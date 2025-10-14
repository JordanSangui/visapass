import { compose } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Searchable } from '@foadonis/magnify'

export default class Notification extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare custormerId: number | null

  @column()
  declare type: string

  @column()
  declare message: string

  @column()
  declare status: string

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}