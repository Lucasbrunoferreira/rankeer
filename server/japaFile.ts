import 'reflect-metadata'
import execa from 'execa'
import { join } from 'path'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

import * as fs from 'fs'

process.env.NODE_ENV = 'testing'
process.env.DB_CONNECTION = 'sqlite'
process.env.ADONIS_ACE_CWD = join(__dirname, '..')

sourceMapSupport.install({ handleUncaughtExceptions: false })

async function upDatabaseForTesting () {
  fs.mkdirSync('./tmp', { recursive: true })

  await execa.node('ace', ['migration:run'], {
    stdio: 'inherit',
  })
}

async function downDatabaseForTesting () {
  await execa.node('ace', ['migration:rollback'], {
    stdio: 'inherit',
  })
}

async function startHttpServer () {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

configure({
  files: [
    'build/test/**/*.spec.js',
  ],
  before: [
    upDatabaseForTesting,
    startHttpServer,
  ],
  after: [
    downDatabaseForTesting,
  ],
})
