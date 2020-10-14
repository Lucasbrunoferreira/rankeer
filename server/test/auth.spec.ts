import test from 'japa'
import User from 'App/Models/User'
import * as userMock from './mocks/user.json'
import supertest from 'supertest'
import { BASE_URL } from './utils/environment'

test.group('Auth', () => {
  test('create a user', async (assert) => {
    const user = new User()
    user.name = userMock.name
    user.email = userMock.email
    user.password = userMock.password
    await user.save()

    assert.isTrue(user.$isPersisted)
  })

  test('login with the user created in previous step', async (assert) => {
    const response = await supertest(BASE_URL)
      .post('/auth/login')
      .send({ email: userMock.email, password: userMock.password })
      .expect(200)

    process.env.TOKEN = response.body.token

    assert.equal(response.body.user.email, userMock.email)
  })
})
