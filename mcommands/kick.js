module.exports = {
  name : 'kick',
  usage: '<user>',
  guildOnly: 'true',
  dev: 'false',
  execute (message, args){
    if (!message.mentions.users.size) {
	return message.reply('you need to tag a user in order to kick them!');
}
	const member = message.mentions.members.first();
member.kick();

  }
}