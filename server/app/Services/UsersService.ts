import { CreateUserDto } from 'App/Dtos/UserDto'
import ParticipantInfo from 'App/Models/ParticipantInfo'
import User from 'App/Models/User'

export default class UsersService {
  public async saveOne (data: CreateUserDto): Promise<User> {
    const { email, name, password, office, skill } = data

    const user = await User.create({ email, name, password })

    if (office || skill) {
      const info = new ParticipantInfo()
      info.skill = skill || '-'
      info.office = office || '-'

      await user.related('participantInfo').save(info)
    }

    return await User.query().where('id', user.id).preload('participantInfo').firstOrFail()
  }

  public async getAll (): Promise<User[]> {
    return await User.all()
  }

  public async getOneById (userId: number): Promise<User> {
    return await User.findOrFail(userId)
  }

  public async getOneByEmail (email: string): Promise<User> {
    return await User.findByOrFail('email', email)
  }
}
