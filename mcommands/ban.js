module.exports = {
  name: "ban",
  description: "A simple ban command",
  usage: "<user>",
  guildOnly: 'true',
  staffOnly: true,
  dev: 'false',
  execute (message, args){
    const member = message.mentions.members.first();
     if (!message.mentions.users.size) {
	return message.reply('you need to tag a user in order to kick them!');
}
    const user = message.mentions.users.first();
user.ban(user);
  }
}