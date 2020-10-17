import socketIo from 'socket.io'
import Server from '@ioc:Adonis/Core/Server'

class WebSocket {
  public isReady = false
  public io: socketIo.Server

  public start (callback: (socket: socketIo.Socket) => void) {
    this.io = socketIo(Server.instance!)
    this.io.on('connection', callback)
    this.isReady = true
  }
}

export default new WebSocket()
