import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'
import UsersService from 'App/Services/UsersService'

export default class AuthController {
  private userService = new UsersService()

  public async login ({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    const token = await auth.use('api').attempt(email, password)

    const user = await this.userService.getOneByEmail(email)

    return { user, token: token.token }
  }
}
