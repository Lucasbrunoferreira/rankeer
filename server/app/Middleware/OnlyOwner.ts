import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OnlyOwner {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    console.log('teste', ctx)

    await next()
  }
}
