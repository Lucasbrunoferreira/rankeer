import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProjectService from 'App/Services/ProjectService'
import { CreateProjectValidator, UpdateProjectValidator } from 'App/Validators/ProjectValidator'
import { CreateProjectDto, UpdateProjectDto } from 'App/Dtos/ProjectDto'
import { useLoggedUser } from 'App/Helpers/loggedUser'
import { LinkValidator } from 'App/Validators/LinkValidator'
import { TaskValidator } from 'App/Validators/TaskValidator'
import { TagValidator } from 'App/Validators/TagValidator'
import { BusinessModelDto } from 'App/Dtos/BusinessDto'
import { BusinessModelValidator } from 'App/Validators/BusinessModelValidator'

export default class ProjectController {
  private projectService = new ProjectService()

  public async index ({ auth, request }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    const eventId = request.input('eventId')
    return this.projectService.getOneByOwner(id, eventId)
  }

  public async store ({ request, response, auth }: HttpContextContract) {
    const data: CreateProjectDto = await request.validate(CreateProjectValidator)
    const { id } = await useLoggedUser(auth)

    const hasProject = await this.projectService.alreadyInProject(id, data.eventId)

    if (!hasProject) {
      return await this.projectService.saveOne(data, id)
    } else {
      return response.badRequest({ message: 'O usuário já pertence a um projeto!' })
    }
  }

  public async update ({ request, params }: HttpContextContract) {
    const data: UpdateProjectDto = await request.validate(UpdateProjectValidator)

    return await this.projectService.updatedProject(data, params.id)
  }

  public async saveLink ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(LinkValidator)

    return await this.projectService.saveLinkInProject(description, params.projectId)
  }

  public async saveTask ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(TaskValidator)

    return await this.projectService.saveTaskInProject(description, params.projectId)
  }

  public async saveTag ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(TagValidator)

    return await this.projectService.saveTagInProject(description, params.projectId)
  }

  public async removeTag ({ params }: HttpContextContract) {
    return await this.projectService.reemoveTagOfProject(params.tagId)
  }

  public async setTaskDone ({ params }: HttpContextContract) {
    return await this.projectService.setTaskStatus(params.taskId, true)
  }

  public async setTaskUndone ({ params }: HttpContextContract) {
    return await this.projectService.setTaskStatus(params.taskId, false)
  }

  public async saveBusinessModel ({ request, params }: HttpContextContract) {
    const data: BusinessModelDto = await request.validate(BusinessModelValidator)
    return await this.projectService.saveBusinessModelInProject(params.projectId, data)
  }
}
