import User from 'App/Models/User'

export default class UsersService {
  public async saveOne (user: User): Promise<User> {
    return await User.create(user)
  }

  public async getAll (): Promise<User[]> {
    return await User.all()
  }

  public async getOneById (userId: number): Promise<User> {
    return await User.findOrFail(userId)
  }
}
