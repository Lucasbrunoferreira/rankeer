import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }

  public async handle (error, ctx) {
    if (error.code === 'E_VALIDATION_FAILURE') {
      return ctx.response.status(422).send(error.messages)
    }

    if (error.code === 'E_ROW_NOT_FOUND') {
      return ctx.response.status(400).send({
        message: 'Não foi encontrado registro(s) para o(s) paramêtro(s) informado(s).',
      })
    }

    return super.handle(error, ctx)
  }
}
