import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public projectId: number

  @column()
  public description: string
}
