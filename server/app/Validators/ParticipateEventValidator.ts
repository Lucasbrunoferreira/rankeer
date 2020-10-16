import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ParticipateEventValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    code: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'code.required': 'Por favor, informe o código do evento.',
  }
}
