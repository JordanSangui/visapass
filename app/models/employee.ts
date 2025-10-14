import { compose } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { Searchable } from '@foadonis/magnify'

export default class Employee extends compose(BaseModel, Searchable) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare countryId: number

  @column()
  declare agencyId: number

  @column()
  declare creatorId: number | null

  @column()
  declare role: string

  @column()
  declare type: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare address: string

  @column()
  declare tel: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare visible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  static async hashPassword(user: Employee) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}