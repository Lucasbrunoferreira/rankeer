import User from 'App/Models/User'
import { AuthConfig } from '@ioc:Adonis/Addons/Auth'

const authConfig: AuthConfig = {
  guard: 'api',
  list: {
    api: {
      driver: 'oat',
      tokenProvider: {
        driver: 'database',
        table: 'tokens',
      },
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email'],
        model: User,
      },
    },
  },
}

export default authConfig
