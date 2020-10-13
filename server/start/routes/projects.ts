import Route from '@ioc:Adonis/Core/Route'

Route.get('project', 'ProjectsController.index').middleware('auth')
Route.post('project', 'ProjectsController.store').middleware('auth')
Route.put('project/:id', 'ProjectsController.update').middleware('auth')

Route.post('project/:projectId/link', 'ProjectsController.saveLink').middleware('auth')

Route.post('project/:projectId/tag', 'ProjectsController.saveTag').middleware('auth')
Route.delete('project/tag/:tagId', 'ProjectsController.removeTag').middleware('auth')

Route.post('project/:projectId/task', 'ProjectsController.saveTask').middleware('auth')
Route.put('project/task/:taskId/done', 'ProjectsController.setTaskDone').middleware('auth')
Route.put('project/task/:taskId/unDone', 'ProjectsController.setTaskUndone').middleware('auth')

Route.post('project/:projectId/businessModel', 'ProjectsController.saveBusinessModel').middleware('auth')
