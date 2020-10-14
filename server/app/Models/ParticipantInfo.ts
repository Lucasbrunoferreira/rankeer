import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ParticipantInfo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public office: string

  @column()
  public skill: string
}
