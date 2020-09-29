import { DateTime } from 'luxon'
import Event from 'App/Models/Event'
import { EventDto } from 'App/Dtos/EventDto'
import User from 'App/Models/User'

export default class EventsService {
  public async saveOne (data: EventDto): Promise<Event> {
    return await Event.create({ name: data.name, userId: data.userId, date: data.date.toJSDate() })
  }

  public async getOneById (eventId: number): Promise<Event> {
    return await Event.findOrFail(eventId)
  }

  public async getAllByUser (userId: number): Promise<Event[]> {
    return await Event.query().where('userId', userId)
  }

  public async getAllWillHappen (): Promise<Event[]> {
    return Event.query().where('date', '>=', DateTime.utc().toSQLDate())
  }

  public async setParticipant (event: Event, participant: User): Promise<void> {
    await event.related('participants').save(participant)
  }

  public async isAlreadyParticipant (eventId: number, participantId: number): Promise<boolean> {
    const event = await Event.query().preload('participants').where('id', eventId).firstOrFail()
    return event.participants.findIndex((participant) => participant.id === participantId) >= 0
  }
}
