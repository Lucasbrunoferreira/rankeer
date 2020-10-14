import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BusinessModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public projectId: number

  @column()
  public partnerships: string

  @column()
  public activities: string

  @column()
  public resources: string

  @column({ columnName: 'value_offering' })
  public value_offering: string

  @column()
  public relationship: string

  @column()
  public channels: string

  @column({ columnName: 'customer_segment' })
  public customer_segment: string

  @column({ columnName: 'cost_structure' })
  public cost_structure: string

  @column({ columnName: 'revenue_sources' })
  public revenue_sources: string
}
