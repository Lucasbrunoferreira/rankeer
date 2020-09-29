import Route from '@ioc:Adonis/Core/Route'

Route.get('events', 'EventsController.index').middleware('auth')
Route.post('events', 'EventsController.store').middleware('auth')
Route.get('events/happen', 'EventsController.willHappen')
Route.post('events/invite', 'EventsController.invite')
