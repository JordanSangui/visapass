import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Searchable } from '@foadonis/magnify'

export default class Event extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare agencyId: number | null

  @column()
  declare creatorId: number

  @column()
  declare type: string

  @column()
  declare link: string | null

  @column()
  declare fullAddress: string | null

  @column()
  declare description: string

  @column()
  declare price: string | null

  @column.dateTime({ autoCreate: false })
  declare startedAt: DateTime

  @column.dateTime({ autoCreate: false })
  declare endedAt: DateTime

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}