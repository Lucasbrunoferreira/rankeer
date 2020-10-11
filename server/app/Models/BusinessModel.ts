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
  public valueOffering: string

  @column()
  public relationship: string

  @column()
  public channels: string

  @column({ columnName: 'customer_segment' })
  public customerSegment: string

  @column({ columnName: 'cost_structure' })
  public costStructure: string

  @column({ columnName: 'revenue_sources' })
  public revenueSources: string
}
