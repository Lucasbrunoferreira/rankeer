import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class InviteMemberValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'Por favor, informe o e-mail do usuário.',
  }
}
