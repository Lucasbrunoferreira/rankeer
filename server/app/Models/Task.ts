import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public projectId: number

  @column()
  public description: string

  @column({ columnName: 'is_done' })
  public isDone: boolean
}
