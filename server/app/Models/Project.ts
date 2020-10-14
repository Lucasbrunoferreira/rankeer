import { DateTime } from 'luxon'
import { BaseModel, hasOne, HasOne, BelongsTo, belongsTo,column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Event from './Event'
import Link from './Link'
import Tag from './Tag'
import Task from './Task'
import BusinessModel from './BusinessModel'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public annotations: string

  @column()
  public color: string

  @column({ columnName: 'impact_phrase' })
  public impactPhrase: string

  @column({ columnName: 'user_id' })
  public userId: number

  @column({ columnName: 'event_id' })
  public eventId: number

  @belongsTo(() => User)
  public owner: BelongsTo<typeof User>

  @belongsTo(() => Event)
  public event: BelongsTo<typeof Event>

  @hasOne(() => BusinessModel)
  public businessModel: HasOne<typeof BusinessModel>

  @hasMany(() => Task)
  public tasks: HasMany<typeof Task>

  @hasMany(() => Link)
  public links: HasMany<typeof Link>

  @hasMany(() => Tag)
  public tags: HasMany<typeof Tag>

  @manyToMany(() => User, {
    localKey: 'id',
    pivotForeignKey: 'project_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'user_id',
    pivotTable: 'project_members',
  })
  public members: ManyToMany<typeof User>
}
