import test from 'japa'
import User from 'App/Models/User'
import supertest from 'supertest'
import * as userMock from './mocks/user.json'
import { BASE_URL } from './utils/environment'

test.group('User', () => {
  test('ensure user password gets hashed during save', async (assert) => {
    const user = new User()
    user.name = 'Lucas'
    user.password = 'supersecret'
    user.email = 'infoweek@email.com'
    await user.save()

    assert.notEqual(user.password, 'supersecret')
  })

  test('validate hashed password', async (assert) => {
    const user = await User.findBy('name', userMock.name)
    const isValidPassword = await user?.verifyPassword(userMock.password)

    assert.isTrue(isValidPassword)
  })

  test('expected reject a duplicated e-mail in database', async (assert) => {
    const response = await supertest(BASE_URL)
      .post('/users')
      .set('Authorization', `Bearer ${process.env.TOKEN}`)
      .send({ name: userMock.name, email: userMock.email, password: userMock.password })
      .expect(422)

    assert.equal(response.body.errors[0].rule, 'unique')
    assert.equal(response.body.errors[0].message, 'O e-mail informado já esta em uso.')
  })

  test('ensure the request body validation to create a user', async (assert) => {
    const response = await supertest(BASE_URL)
      .post('/users')
      .set('Authorization', `Bearer ${process.env.TOKEN}`)
      .send({ name: null, email: null })
      .expect(422)

    assert.hasAnyKeys(response.body, ['errors'])
    assert.equal(response.body.errors[0].message, 'Por favor, informe seu nome completo.')
  })

  test('expected success a get the list of all users in database', async (assert) => {
    const response = await supertest(BASE_URL)
      .get('/users')
      .set('Authorization', `Bearer ${process.env.TOKEN}`)
      .expect(200)

    assert.isArray(response.body)
    assert.isNotEmpty(response.body)
  })
})
