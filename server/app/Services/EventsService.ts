import { DateTime } from 'luxon'
import Event from 'App/Models/Event'
import { EventDto } from 'App/Dtos/EventDto'
import User from 'App/Models/User'

export default class EventsService {
  public async saveOne (data: EventDto): Promise<Event> {
    const event = await Event.create({
      name: data.name,
      userId: data.userId,
      date: data.date.toJSDate(),
      code: this.makeEventCode(),
    })

    await event.related('participants').attach({
      [event.userId]: {
        role: 'owner',
      },
    })

    return event
  }

  public async getOneById (eventId: number): Promise<Event> {
    return await Event.findOrFail(eventId)
  }

  public async getEventAndRole (eventId: number, userId: number): Promise<any> {
    let event = await Event
      .query()
      .where('id', eventId)
      .preload('participants', (query) => {
        query.pivotColumns(['role']).whereInPivot('user_id', [userId])
      })
      .firstOrFail()

    let userRoleInEvent = null

    event?.participants.forEach((partic) => {
      userRoleInEvent = partic.$extras.pivot_role
    })

    return { role: userRoleInEvent, ...event.toJSON() }
  }

  public async getAllByUser (userId: number): Promise<Event[]> {
    let allEvents = await Event.query().preload('participants').exec()

    allEvents = allEvents.filter((event) => {
      return event.participants.findIndex((participant) => participant.id === userId) >= 0
    })

    return allEvents
  }

  public async getAllWillHappen (): Promise<Event[]> {
    return Event.query().where('date', '>=', DateTime.utc().toSQLDate())
  }

  public async setParticipant (event: Event, participant: User): Promise<void> {
    await event.related('participants').attach({
      [participant.id]: {
        role: 'participant',
      },
    })
  }

  public async setEvaluator (event: Event, participant: User): Promise<void> {
    await event.related('participants').attach({
      [participant.id]: {
        role: 'evaluator',
      },
    })
  }

  public async participateEventByCode (eventCode: string, userId: number): Promise<void> {
    const user = await User.findOrFail(userId)
    const event = await Event.findByOrFail('code', eventCode)

    const isAlready = await this.isAlreadyInProject(event.id, user.id)

    if (!isAlready) {
      await event.related('participants').attach({
        [user.id]: {
          role: 'participant',
        },
      })
    }
  }

  public async isAlreadyInProject (eventId: number, participantId: number): Promise<boolean> {
    const event = await Event.query().preload('participants').where('id', eventId).firstOrFail()
    return event.participants.findIndex((participant) => participant.id === participantId) >= 0
  }

  public makeEventCode (): string {
    const randomString = Math.random().toString(36).slice(6).toLocaleUpperCase()
    return`#${randomString}`
  }
}
