import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class InviteEventValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    userId: schema.number(),
    eventId: schema.number(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'eventId.required': 'Por favor, informe o evento.',
    'userId.required': 'Por favor, informe o usuário para enviar o convite.',
  }
}
