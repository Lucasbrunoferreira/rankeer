import test from 'japa'
import Event from 'App/Models/Event'
import User from 'App/Models/User'
import * as userMock from './mocks/user.json'
// import { BASE_URL } from './utils/environment'

test.group('Events', () => {
  test('save a new event in database by Model', async (assert) => {
    const user = await User.findByOrFail('name', userMock.name)

    const event = new Event()
    event.name = 'InfoWeek 2020'
    event.date = new Date(2020, 20, 20)
    event.userId = user.id

    const result = await event.save()

    assert.isTrue(result.$isPersisted)
    assert.equal(result.name, event.name)
  })

  test('test relation user and event has success saved', async (assert) => {
    const event = await Event.query().where('name', 'InfoWeek 2020').preload('user').firstOrFail()
    assert.equal(event.user.name, userMock.name)
  })
})
