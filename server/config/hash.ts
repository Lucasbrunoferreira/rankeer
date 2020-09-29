import Env from '@ioc:Adonis/Core/Env'
import { HashConfig } from '@ioc:Adonis/Core/Hash'

const hashConfig: HashConfig = {
  default: Env.get('HASH_DRIVER', 'argon') as 'argon',
  list: {
    argon: {
      driver: 'argon2',
      variant: 'id',
      iterations: 3,
      memory: 4096,
      parallelism: 1,
      saltSize: 16,
    },
    bcrypt: {
      driver: 'bcrypt',
      rounds: 10,
    },
  },
}

export default hashConfig
