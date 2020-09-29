import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class AuthMiddleware {
  protected async authenticate (auth: HttpContextContract['auth'], guards: any[]) {
    let guardLastAttempted: string | undefined
    for (let guard of guards) {
      guardLastAttempted = guard
      if (await auth.use(guard).check()) {
        auth.defaultGuard = guard
        return true
      }
    }

    throw new AuthenticationException(
      'Unauthorized access',
      'E_UNAUTHORIZED_ACCESS',
      guardLastAttempted
    )
  }

  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>, customGuards: string[]) {
    const guards = customGuards.length ? customGuards : [auth.name]
    await this.authenticate(auth, guards)
    await next()
  }
}
