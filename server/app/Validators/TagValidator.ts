import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export class TagValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    description: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'description.required': 'Por favor, informe a descrição da tag.',
  }
}
