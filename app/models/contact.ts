import { compose } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Searchable } from '@foadonis/magnify'

export default class Contact extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare countryId: number

  @column()
  declare agentId: number

  @column()
  declare fullName: string

  @column()
  declare tel: string | null

  @column()
  declare email: string | null

  @column()
  declare services: string

  @column()
  declare message: string

  @column()
  declare response: string | null

  @column()
  declare status: string

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}