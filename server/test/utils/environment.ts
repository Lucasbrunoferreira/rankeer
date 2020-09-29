import Env from '@ioc:Adonis/Core/Env'

const BASE_URL = `http://${Env.get('HOST', '0.0.0.0')}:${Env.get('PORT', '3333')}`

export {
  BASE_URL,
}
