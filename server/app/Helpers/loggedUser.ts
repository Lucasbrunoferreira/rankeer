import User from 'App/Models/User'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'

const useLoggedUser = async (auth: AuthContract): Promise<User> => {
  return await auth.authenticate()
}

export {
  useLoggedUser,
}
