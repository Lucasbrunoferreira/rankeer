import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class EventValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string(),
    date: schema.date(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'name.required': 'Por favor, informe um nome para o evento.',
    'date.required': 'Informe a data que de realização do evento.',
  }
}
