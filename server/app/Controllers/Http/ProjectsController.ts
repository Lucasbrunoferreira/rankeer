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
import InviteMemberValidator from 'App/Validators/InviteMemberValidator'
import UsersService from 'App/Services/UsersService'
import WebSocket from 'App/Services/WebSocket'

export default class ProjectController {
  private projectService = new ProjectService()
  private userService = new UsersService()

  public async index ({ auth, request, response }: HttpContextContract) {
    const { id } = await useLoggedUser(auth)
    const eventId = request.input('eventId')

    const project = await this.projectService.getProjectParticipant(id, eventId)

    if (!project) {
      response.badRequest({ message: 'Este usuário não possui projeto neste evento!' })
    }

    return project
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
    const result = await this.projectService.updatedProject(data, params.id)
    this.emitProject(params.id)
    return result
  }

  public async saveLink ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(LinkValidator)
    const result = await this.projectService.saveLinkInProject(description, params.projectId)
    this.emitProject(params.projectId)
    return result
  }

  public async saveTask ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(TaskValidator)
    const result = await this.projectService.saveTaskInProject(description, params.projectId)
    this.emitProject(params.projectId)
    return result
  }

  public async saveTag ({ request, params }: HttpContextContract) {
    const { description } = await request.validate(TagValidator)
    const result = await this.projectService.saveTagInProject(description, params.projectId)
    this.emitProject(params.projectId)
    return result
  }

  public async removeTag ({ params, response }: HttpContextContract) {
    const projectId = await this.projectService.reemoveTagOfProject(params.tagId)
    this.emitProject(projectId)
    return response.ok({ success: true })
  }

  public async setTaskDone ({ params, response }: HttpContextContract) {
    const projectId = await this.projectService.setTaskStatus(params.taskId, true)
    this.emitProject(projectId)
    return response.ok({ success: true })
  }

  public async setTaskUndone ({ params, response }: HttpContextContract) {
    const projectId = await this.projectService.setTaskStatus(params.taskId, false)
    this.emitProject(projectId)
    return response.ok({ success: true })
  }

  public async saveBusinessModel ({ request, params }: HttpContextContract) {
    const data: BusinessModelDto = await request.validate(BusinessModelValidator)
    const result = await this.projectService.saveBusinessModelInProject(params.projectId, data)
    this.emitProject(params.projectId)
    return result
  }

  public async inviteUser ({ request, params }: HttpContextContract) {
    const { email } = await request.validate(InviteMemberValidator)
    const userToInvite = await this.userService.getOneByEmail(email)
    const result = await this.projectService.inviteMemberToProject(params.projectId, userToInvite)
    this.emitProject(params.projectId)
    return result
  }

  public emitProject = async (projectId: number) => {
    const project = await this.projectService.getProjectByID(projectId)
    WebSocket.io.emit(`@PROJECT-${projectId}`, project)
  }
}
