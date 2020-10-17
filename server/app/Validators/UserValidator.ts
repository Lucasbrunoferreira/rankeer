import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string(),
    skill: schema.string.optional(),
    office: schema.string.optional(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'name.required': 'Por favor, informe seu nome completo.',
    'email.required': 'O campo email, deve ser informado',
    'email.email': 'Você deve informar um e-mail válido!',
    'password.required': 'O campo senha, deve ser informado.',
    'email.unique': 'O e-mail informado já esta em uso.',
  }
}
