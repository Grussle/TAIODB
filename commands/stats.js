module.exports = {
  name: 'stats',
  description: 'Shows the stats if the bot',
  dev: 'false',
  execute(message, args){
    message.channel.send('Name: AGPDB \nVersion: 1.0.1 \nDescription: A moderation and fun bot that is under development.')
  }
}