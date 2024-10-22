declare module '@ioc:Adonis/Core/Hash' {
  import { HashDrivers } from '@ioc:Adonis/Core/Hash'

  interface HashersList {
    bcrypt: {
      config: BcryptConfig,
      implementation: BcryptContract,
    },
    argon: {
      config: ArgonConfig,
      implementation: ArgonContract,
    },
  }
}
