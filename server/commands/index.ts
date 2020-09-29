import { listDirectoryFiles } from '@adonisjs/ace'
import Application from '@ioc:Adonis/Core/Application'

export default listDirectoryFiles(__dirname, Application.appRoot, ['./commands/index.js'])
