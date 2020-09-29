import User from 'App/Models/User'

declare module '@ioc:Adonis/Addons/Auth' {
  interface ProvidersList {
    User: {
      implementation: LucidProviderContract<typeof User>,
      config: LucidProviderConfig<typeof User>,
    },
  }

  interface GuardsList {
    api: {
      implementation: OATGuardContract<'User', 'api'>,
      config: OATGuardConfig<'User'>,
    },
  }
}
