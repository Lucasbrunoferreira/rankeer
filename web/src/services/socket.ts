import socketIOClient from 'socket.io-client';

let instance: SocketIOClient.Socket = null;

export const startSocket = () => {
  instance = socketIOClient(process.env.REACT_APP_API_URL)
  return instance
}

export const getSocketClient = () => {
  if (instance) return instance
  else return socketIOClient(process.env.REACT_APP_API_URL)
}
