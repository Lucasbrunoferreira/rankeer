import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.timestamps(true)
      table.string('name', 40).notNullable()
      table.string('description', 170)
      table.string('annotations', 500)
      table.string('color', 7)
      table.string('impact_phrase', 50)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
