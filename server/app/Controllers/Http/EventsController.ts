import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EventsService from 'App/Services/EventsService'
import EventValidator from 'App/Validators/EventValidator'
import { EventDto } from 'App/Dtos/EventDto'
import { useLoggedUser } from 'App/Helpers/loggedUser'
import { InviteEventDto } from 'App/Dtos/InviteEventDto'
import InviteEventValidator from 'App/Validators/InviteEventValidator'
import UsersService from 'App/Services/UsersService'

export default class EventsController {
  private eventsService = new EventsService()
  private userService = new UsersService()

  public async index ({ auth }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    return this.eventsService.getAllByUser(id)
  }

  public async store ({ request, auth }: HttpContextContract) {
    const data: EventDto = await request.validate(EventValidator)
    const { id } = await useLoggedUser(auth)
    return await this.eventsService.saveOne({ ...data, userId: id })
  }

  public async willHappen () {
    return this.eventsService.getAllWillHappen()
  }

  public async invite ({ request, response }: HttpContextContract) {
    const data: InviteEventDto = await request.validate(InviteEventValidator)

    const event = await this.eventsService.getOneById(data.eventId)
    const participant = await this.userService.getOneById(data.participantId)

    const isAlreadyParticipant = await this.eventsService.isAlreadyParticipant(data.eventId, data.participantId)

    if (isAlreadyParticipant) {
      return response.badRequest({ message: `O usuário ${participant.name} já esta participando do evento ${event.name}!` })
    }

    return this.eventsService.setParticipant(event, participant)
  }
}
