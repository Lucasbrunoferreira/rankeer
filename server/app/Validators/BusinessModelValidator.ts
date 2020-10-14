import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export class BusinessModelValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    partnerships: schema.string.optional(),
    activities: schema.string.optional(),
    resources: schema.string.optional(),
    value_offering: schema.string.optional(),
    relationship: schema.string.optional(),
    channels: schema.string.optional(),
    customer_segment: schema.string.optional(),
    cost_structure: schema.string.optional(),
    revenue_sources: schema.string.optional(),
  })

  public cacheKey = this.ctx.routeKey
}
