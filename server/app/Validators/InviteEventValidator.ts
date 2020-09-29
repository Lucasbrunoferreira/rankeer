import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class InviteEventValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    participantId: schema.number(),
    eventId: schema.number(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'participantId.required': 'Por favor, informe o evento.',
    'eventId.required': 'Por favor, informe o usuário para enviar o convite.',
  }
}
