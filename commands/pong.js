module.exports = {
  name: 'pong',
  description: 'Ping',
  dev: 'false',
  execute (message, args){
    message.channel.send('Ping');
  }
}