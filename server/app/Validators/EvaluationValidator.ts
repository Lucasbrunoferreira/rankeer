import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export class EvaluationValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    project_id: schema.number(),
    evaluator_id: schema.number(),
    presentation: schema.number.optional(),
    innovation: schema.number.optional(),
    viability: schema.number.optional(),
    aspects: schema.number.optional(),
    reach: schema.number.optional(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'project_id.required': 'Por favor, informe o projeto a ser avaliado.',
    'evaluator_id.required': 'Por favor, informe o avaliador deste projeto.',
  }
}
