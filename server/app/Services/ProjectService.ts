import Project from 'App/Models/Project'
import { CreateProjectDto, UpdateProjectDto } from 'App/Dtos/ProjectDto'
import Link from 'App/Models/Link'
import Task from 'App/Models/Task'
import Tag from 'App/Models/Tag'
import { BusinessModelDto } from 'App/Dtos/BusinessDto'
import BusinessModel from 'App/Models/BusinessModel'
import User from 'App/Models/User'

export default class ProjectService {
  public async saveOne (data: CreateProjectDto, userId: number): Promise<Project> {
    const project =  await Project.create({ ...data, userId, color: '#2980b9' })
    const user = await User.findOrFail(userId)
    await project.related('members').save(user)
    return project
  }

  public async getEventParticipant (userId: number, eventId: number): Promise<Project> {
    const project = await Project.query()
      .preload('members', (members) => members.wherePivot('user_id', userId).preload('participantInfo'))
      .andWhere('eventId', eventId)
      .firstOrFail()


    return await Project.query()
      .preload('members', (members) => members.preload('participantInfo'))
      .preload('businessModel')
      .preload('owner')
      .preload('links')
      .preload('tags')
      .preload('tasks')
      .where('id', project.id)
      .firstOrFail()

  }

  public async alreadyInProject (userId: number, eventId: number): Promise<boolean> {
    const project = await Project.query()
      .where('userId', userId)
      .andWhere('eventId', eventId)
      .first()
    return !!project
  }

  public async updatedProject (data: UpdateProjectDto, projectId: number): Promise<void> {
    let { name, color, description, impactPhrase, annotations } = data
    const project = await Project.findOrFail(projectId)

    name = name || project.name
    color = color || project.color
    description = description || project.description
    impactPhrase = impactPhrase || project.impactPhrase
    annotations = annotations || project.annotations

    await Project.updateOrCreate({ id: projectId }, { name, color, description, impactPhrase, annotations })
  }

  public async saveLinkInProject (description: string, projectId: number): Promise<void> {
    const project = await Project.findOrFail(projectId)

    const link = new Link()
    link.description = description

    project.related('links').save(link)
  }

  public async saveTaskInProject (description: string, projectId: number): Promise<Task[]> {
    const project = await Project.findOrFail(projectId)

    const task = new Task()
    task.description = description
    task.isDone = false

    await project.related('tasks').save(task)

    return Task.query().where('projectId', projectId).exec()
  }

  public async saveTagInProject (description: string, projectId: number): Promise<Tag[]> {
    const project = await Project.findOrFail(projectId)

    const tag = new Tag()
    tag.description = description

    await project.related('tags').save(tag)

    return Tag.query().where('projectId', projectId).exec()
  }

  public async setTaskStatus (taskId: number, status: boolean): Promise<void> {
    await Task.updateOrCreate({ id: taskId }, { isDone: status })
  }

  public async reemoveTagOfProject (taskId: number): Promise<void> {
    const tag = await Tag.findOrFail(taskId)
    await tag.delete()
  }

  public async saveBusinessModelInProject (projectId: number, data: BusinessModelDto): Promise<void> {
    let {
      activities,
      channels,
      costStructure,
      customerSegment,
      partnerships,
      relationship,
      resources,
      valueOffering,
      revenueSources,
    } = data

    const businessModel = await BusinessModel.findBy('projectId', projectId)

    if (businessModel) {
      activities = activities || businessModel.activities
      channels = channels || businessModel.channels
      costStructure = costStructure || businessModel.costStructure
      customerSegment = customerSegment || businessModel.customerSegment
      partnerships = partnerships || businessModel.partnerships
      relationship = relationship || businessModel.relationship
      resources = resources || businessModel.resources
      valueOffering = valueOffering || businessModel.valueOffering
      revenueSources = revenueSources || businessModel.revenueSources

      await BusinessModel.updateOrCreate({ projectId }, {
        activities,
        channels,
        costStructure,
        customerSegment,
        partnerships,
        relationship,
        resources,
        valueOffering,
        revenueSources,
      })
    } else {
      await BusinessModel.create({ projectId, ...data })
    }
  }

  public async inviteMemberToProject(projectId: number, user: User) {
    const project = await Project.findOrFail(projectId)
    return await project.related('members').save(user)
  }
}
