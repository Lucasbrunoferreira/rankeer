import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'
import { column, BaseModel, beforeSave, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import ParticipantInfo from './ParticipantInfo'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public rememberMeToken?: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => ParticipantInfo)
  public participantInfo: HasOne<typeof ParticipantInfo>

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  public async verifyPassword (password: string) {
    return await Hash.verify(this.password, password)
  }
}
