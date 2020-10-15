import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Evaluations extends BaseSchema {
  protected tableName = 'evaluations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.integer('evaluator_id').unsigned().references('id').inTable('users')
      table.integer('presentation', 5)
      table.integer('innovation', 5)
      table.integer('viability', 5)
      table.integer('aspects', 5)
      table.integer('reach', 5)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
