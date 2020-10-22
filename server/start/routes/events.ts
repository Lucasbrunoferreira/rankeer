import Route from '@ioc:Adonis/Core/Route'

Route.get('events', 'EventsController.index').middleware('auth')
Route.get('events/evaluator', 'EventsController.getAllEvaluator').middleware('auth')
Route.post('events', 'EventsController.store').middleware('auth')
Route.get('events/happen', 'EventsController.willHappen')
Route.get('events/:eventId', 'EventsController.getEventById').middleware('auth')
Route.post('events/participate', 'EventsController.participateEventByCode').middleware('auth')
Route.post('events/invite/participant', 'EventsController.inviteParticipant')
Route.post('events/invite/evalutor', 'EventsController.inviteEvaluator')
