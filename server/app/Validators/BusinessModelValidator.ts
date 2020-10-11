import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export class BusinessModelValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    partnerships: schema.string.optional(),
    activities: schema.string.optional(),
    resources: schema.string.optional(),
    valueOffering: schema.string.optional(),
    relationship: schema.string.optional(),
    channels: schema.string.optional(),
    customerSegment: schema.string.optional(),
    costStructure: schema.string.optional(),
    revenueSources: schema.string.optional(),
  })

  public cacheKey = this.ctx.routeKey
}
