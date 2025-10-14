import { compose } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Searchable } from '@foadonis/magnify'

export default class Agency extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare countryId: number

  @column()
  declare chiefId: number | null

  @column()
  declare name: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare tel: string

  @column()
  declare siret: string

  @column()
  declare openingHours: string

  @column()
  declare iban: string

  @column()
  declare bicSwift: string | null

  @column()
  declare ribBankCode: string | null

  @column()
  declare ribBankOffice: string | null

  @column()
  declare ribAccountNumber: string | null

  @column()
  declare ribKey: string | null

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}