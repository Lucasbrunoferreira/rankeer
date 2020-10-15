import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EvaluationService from 'App/Services/EvaluationService'
import { EvaluationDto } from 'App/Dtos/EvaluationDto'
import { EvaluationValidator } from 'App/Validators/EvaluationValidator'
import WebSocket from 'App/Services/WebSocket'

export default class EvaluationController {
  private evaluationService = new EvaluationService()

  public async index ({ params }: HttpContextContract) {
    const result = await this.evaluationService.getAll(params.eventId)
    return result
  }

  public async store ({ request, response }: HttpContextContract) {
    const data: EvaluationDto = await request.validate(EvaluationValidator)

    const eventId = await this.evaluationService.save(data)
    const results = await this.evaluationService.getAll(eventId)

    WebSocket.io.emit(`@EVALUATION-${eventId}`, results)

    return response.ok({ message: 'ok' })
  }
}
