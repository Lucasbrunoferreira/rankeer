import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EventsService from 'App/Services/EventsService'
import EventValidator from 'App/Validators/EventValidator'
import { EventDto } from 'App/Dtos/EventDto'
import { useLoggedUser } from 'App/Helpers/loggedUser'
import { InviteEventDto } from 'App/Dtos/InviteEventDto'
import InviteEventValidator from 'App/Validators/InviteEventValidator'
import UsersService from 'App/Services/UsersService'
import ParticipateEventValidator from 'App/Validators/ParticipateEventValidator'

export default class EventsController {
  private eventsService = new EventsService()
  private userService = new UsersService()

  public async index ({ auth }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    return this.eventsService.getAllByUser(id)
  }

  public async getAllEvaluator ({ auth }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    return this.eventsService.getAllToEvaluator(id)
  }

  public async store ({ request, auth }: HttpContextContract) {
    const data: EventDto = await request.validate(EventValidator)
    const { id } = await useLoggedUser(auth)
    return await this.eventsService.saveOne({ ...data, userId: id })
  }

  public async willHappen () {
    return this.eventsService.getAllWillHappen()
  }

  public async getEventById ({ params, auth }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    return this.eventsService.getEventAndRole(params.eventId, id)
  }

  public async participateEventByCode ({ auth, request }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    const { code } = await request.validate(ParticipateEventValidator)
    return this.eventsService.participateEventByCode(code, id)
  }

  public async inviteParticipant ({ request, response }: HttpContextContract) {
    const data: InviteEventDto = await request.validate(InviteEventValidator)

    const event = await this.eventsService.getOneById(data.eventId)
    const participant = await this.userService.getOneById(data.userId)

    const isAlreadyInProject = await this.eventsService.isAlreadyInProject(data.eventId, data.userId)

    if (isAlreadyInProject) {
      return response.badRequest({ message: `O usuário ${participant.name} já esta participando do evento ${event.name}!` })
    }

    return this.eventsService.setParticipant(event, participant)
  }

  public async inviteEvaluator ({ request, response }: HttpContextContract) {
    const data: InviteEventDto = await request.validate(InviteEventValidator)

    const event = await this.eventsService.getOneById(data.eventId)
    const evaluator = await this.userService.getOneById(data.userId)

    const isAlreadyInProject = await this.eventsService.isAlreadyInProject(data.eventId, data.userId)

    if (isAlreadyInProject) {
      return response.badRequest({ message: `O usuário ${evaluator.name} já esta participando do evento ${event.name}!` })
    }

    return this.eventsService.setEvaluator(event, evaluator)
  }
}
