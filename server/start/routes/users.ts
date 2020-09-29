import Route from '@ioc:Adonis/Core/Route'

Route.get('users', 'UsersController.index').middleware('auth')
Route.post('users', 'UsersController.store').middleware('auth')
