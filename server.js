 const fs = require('fs');
const Discord = require("discord.js");
const {token, prefix} = require('./config.json');
const client = new Discord.Client();
 client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//This is needed if your service times out every 5 minuets
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Logged in!");
});
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);
  if (command.guildOnly && message.channel.type !== 'text') {
	return message.reply('I can\'t execute that command inside DMs!');
}
  if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

  
try {
	client.commands.get(commandName).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply(':warning: There was an error trying to execute that command! :warning:');
}	

});

client.login(token);
