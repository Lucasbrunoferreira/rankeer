import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectMembers extends BaseSchema {
  protected tableName = 'project_members'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('project_id').unsigned().references('id').inTable('projects')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
