import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ParticipantInfos extends BaseSchema {
  protected tableName = 'participant_infos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('office')
      table.string('skill')
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
