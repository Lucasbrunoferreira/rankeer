import Route from '@ioc:Adonis/Core/Route'

Route.get('evaluation/:eventId', 'EvaluationController.index')
Route.post('evaluation', 'EvaluationController.store').middleware('auth')
