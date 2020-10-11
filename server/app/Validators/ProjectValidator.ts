import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export class CreateProjectValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string(),
    eventId: schema.number(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'name.required': 'Por favor, informe um nome para o projeto.',
    'eventId.required': 'Por favor, informe o evento a qual pertence o projeto.',
  }
}

export class UpdateProjectValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string.optional(),
    description: schema.string.optional(),
    color: schema.string.optional(),
    impactPhrase: schema.string.optional(),
    annotations: schema.string.optional(),
  })

  public cacheKey = this.ctx.routeKey
}
