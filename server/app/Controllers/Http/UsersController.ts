import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService'
import UserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'

export default class UsersController {
  private userService = new UsersService()

  public async index () {
    return await this.userService.getAll()
  }

  public async store ({ request }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    return await this.userService.saveOne(data as User)
  }
}
