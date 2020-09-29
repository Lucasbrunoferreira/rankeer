import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import Application from '@ioc:Adonis/Core/Application'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {

  connection: Env.get('DB_CONNECTION', 'sqlite') as string,

  connections: {
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: Application.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      healthCheck: false,
    },
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('DB_HOST') as string,
        port: Number(Env.get('DB_PORT', 5432)),
        user: Env.get('DB_USER') as string,
        password: Env.get('DB_PASSWORD') as string,
        database: Env.get('DB_NAME') as string,
      },
      healthCheck: true,
    },
  },
  orm: {
  },
}

export default databaseConfig
