module.exports = {
  name: "support",
  description: 'Use this command to get a link to the support server',
  guildOnly: 'true',
  execute (message, args){
    message.channel.send('I have sent /65you a link to the support server.')
    message.author.send('https://discord.ggXJmG4');
  }
}