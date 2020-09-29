import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EventUsers extends BaseSchema {
  protected tableName = 'event_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('event_id').unsigned().references('id').inTable('events')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
