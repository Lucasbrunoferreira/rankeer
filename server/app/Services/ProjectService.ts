import Project from 'App/Models/Project'
import { CreateProjectDto, UpdateProjectDto } from 'App/Dtos/ProjectDto'
import Link from 'App/Models/Link'
import Task from 'App/Models/Task'
import Tag from 'App/Models/Tag'
import { BusinessModelDto } from 'App/Dtos/BusinessDto'
import BusinessModel from 'App/Models/BusinessModel'

export default class ProjectService {
  public async saveOne (data: CreateProjectDto, userId: number): Promise<Project> {
    return await Project.create({ ...data, userId })
  }

  public async getOneByOwner (userId: number): Promise<Project> {
    const project = await Project.query()
      .preload('businessModel')
      .preload('owner')
      .preload('links')
      .preload('tags')
      .preload('tasks')
      .where('userId', userId)
      .firstOrFail()

    return project
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

  public async saveTaskInProject (description: string, projectId: number): Promise<void> {
    const project = await Project.findOrFail(projectId)

    const task = new Task()
    task.description = description
    task.isDone = false

    project.related('tasks').save(task)
  }

  public async saveTagInProject (description: string, projectId: number): Promise<void> {
    const project = await Project.findOrFail(projectId)

    const tag = new Tag()
    tag.description = description

    project.related('tags').save(tag)
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
}
