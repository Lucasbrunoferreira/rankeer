import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
    ]),
    password: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'O campo email, deve ser informado',
    'email.email': 'Você deve informar um e-mail válido!',
    'password.required': 'O campo senha, deve ser informado.',
  }
}
