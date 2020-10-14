import WebSocket from 'App/Services/WebSocket'
import Logger from '@ioc:Adonis/Core/Logger'

WebSocket.start((socket) => Logger.info(`@WEBSOCKET: New client connected: ${socket.id}`))
