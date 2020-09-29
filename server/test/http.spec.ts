import Env from '@ioc:Adonis/Core/Env'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${Env.get('HOST', '0.0.0.0')}:${Env.get('PORT', '3333')}`

test.group('HTTP', () => {
  test('expected get API informations', async (assert) => {
    const response = await supertest(BASE_URL).get('/').expect(200)

    assert.equal(response.body.name, 'Rankeer - Backend')
  })
})
