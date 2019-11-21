const Discord = require('discord.js');
const guild = new  Discord.Guild;
module.exports = {
  name: 'prune',
  descriptions: 'Used to kick inactive members.',
  dev: 'true',
  personal: 'true',
  execute (message, args){
  guild.pruneMembers(12, true)
  .then(pruned => console.log(`This will prune ${pruned} people!`))
  .catch(console.error);                   
  }
}