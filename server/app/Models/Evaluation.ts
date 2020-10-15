import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Evaluation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public project_id: number

  @column()
  public evaluator_id: number

  @column()
  public presentation: number

  @column()
  public innovation: number

  @column()
  public viability: number

  @column()
  public aspects: number

  @column()
  public reach: number
}
