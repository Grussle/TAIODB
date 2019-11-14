module.exports = {
  name: 'joe',
  description: 'Fun command',
  dev: 'false',
  execute (message, args){
    message.channel.send('Joe Mama')
  }
}