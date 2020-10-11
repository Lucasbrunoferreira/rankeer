import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BusinessModels extends BaseSchema {
  protected tableName = 'business_models'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.timestamps(true)
      table.text('partnerships')
      table.text('activities')
      table.text('resources')
      table.text('value_offering')
      table.text('relationship')
      table.text('channels')
      table.text('customer_segment')
      table.text('cost_structure')
      table.text('revenue_sources')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
