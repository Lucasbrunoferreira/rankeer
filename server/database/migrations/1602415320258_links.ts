import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.string('description', 220)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
