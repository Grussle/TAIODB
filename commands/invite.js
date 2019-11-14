module.exports = {
  name: 'invite',
  description: 'Use this command in a dm to get a link to add the bot to your server!',
  dev: 'false',
  execute (message, args){
    message.reply('https://discordapp.com/api/oauth2/authorize?client_id=639207474737446972&permissions=268561463&scope=bot');
  }
}