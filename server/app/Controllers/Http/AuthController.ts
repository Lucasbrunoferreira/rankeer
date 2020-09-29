import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async login ({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    const token = await auth.use('api').attempt(email, password)
    return token.toJSON()
  }
}
