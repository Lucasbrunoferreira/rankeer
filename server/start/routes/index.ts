import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

import './users'
import './auth'
import './events'
import './projects'
import './evaluation'

Route.get('/', async () => {
  return { name: 'Rankeer - Backend', version: process.env.npm_package_version, date: new Date() }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})
