import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
  'Adonis/Core/BodyParserMiddleware',
])

Server.middleware.registerNamed({
  auth: 'App/Middleware/Auth',
  onlyOwner: 'App/Middleware/OnlyOwner',
})
