import { EvaluationDto } from 'App/Dtos/EvaluationDto'
import Evaluation from 'App/Models/Evaluation'
import Project from 'App/Models/Project'
import { orderBy } from 'lodash'

export default class EvaluationService {
  public async save (data: EvaluationDto): Promise<number> {
    const hasEvaluation = await Evaluation.query()
      .where('project_id', data.project_id)
      .andWhere('evaluator_id', data.evaluator_id)
      .first()

    if (hasEvaluation) {
      await Evaluation.updateOrCreate({
        project_id: data.project_id,
        evaluator_id: data.evaluator_id,
      }, data)
    } else {
      await Evaluation.create(data)
    }

    const project = await Project.findOrFail(data.project_id)

    return project?.eventId
  }

  public async getAll (event_id: number): Promise<any[]> {
    const projects = await Project.query()
      .where('event_id', event_id)
      .preload('event')
      .preload('evaluations')

    let results: any[] = []

    projects.map((project) => {
      let projectResult = {
        id: project.id,
        name: project.name,
        event: project.event.name,
        impact_phrase: project.impactPhrase,
        color: project.color,
        points: 0,
      }

      project.evaluations.map(evaluation => {
        const {presentation, innovation, viability, aspects, reach} = evaluation
        projectResult.points = projectResult.points + presentation + innovation + viability + aspects + reach
      })

      results.push(projectResult)
    })

    return orderBy(results, 'points', 'desc')
  }
}
