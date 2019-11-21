const Discord = require ("discord.js");
const { adminid } = require ("../config.json");
module.exports = {
  name: 'adminaccess',
  description: 'Grants admin access to commands',
  execute(message, args){
    message.channel.send('Password')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "9856" && message.author.id === adminid) {
                message.channel.send("It worked");
              collector.end();
            } else{
                message.channel.send("It didn't work");
            }
        })
  }
}