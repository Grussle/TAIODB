const fs = require("fs");
const Discord = require("discord.js");
const { token, prefix, mprefix } = require("./config.json");
const client = new Discord.Client();
const { Staffrole } = ('./idbank.json');
client.commands = new Discord.Collection();
client.mcommands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
const mcommandFiles = fs
  .readdirSync("./mcommands")
  .filter(file => file.endsWith(".js"));
//This is needed if your service times out every 5 minuets
const http = require("http");
const express = require("express");
const app = express();
const developing = "false";
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
client.on('ready', () => {
    client.user.setStatus('I have 2 prefixes!')
    client.user.setPresence({
        game: {
            name: 'Both Prefixes',
            type: "STREAMING",
        }
    });
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
for (const file of mcommandFiles) {
  const mcommand = require(`./mcommands/${file}`);

  client.mcommands.set(mcommand.name, mcommand);
}

client.once("ready", () => {
  console.log("Logged in!");
});
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);
  if (command.guildOnly && message.channel.type !== "text") {
    return message.reply("I can't execute that command inside DMs!");
  }
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }
  if (developing === "true" && message.author.id !== "603996421833752589") {
    message.channel.send(
      ":no_entry: The bot is currently undergoing development. :no_entry: "
    );
    return;
  }
  if (command.dev === "true") {
    message.channel.send(
      ":no_entry: This command is under development. :no_entry:"
    );
    return;
  }
  if (command.personal === "true" && message.author.id !== "603996421833752589") {
    message.channel.send(
      ":no_entry: You do not have access to this command! :no_entry: "
    );
  }
  if (command.staffOnly && !message.member.role.has("name", Staffrole )){
    return
  }

  try {
    client.commands.get(commandName).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(
      ":warning: There was an error trying to execute that command! :warning:"
    );
  }
});
client.on("message", message => {
  if (!message.content.startsWith(mprefix) || message.author.bot) return;

  const args = message.content.slice(mprefix.length).split(" ");
  const mcommandName = args.shift().toLowerCase();

  if (!client.mcommands.has(mcommandName)) return;
  const mcommand = client.mcommands.get(mcommandName);
  
  if (mcommand.guildOnly && message.channel.type !== "text") {
    return message.reply("I can't execute that command inside DMs!");
  }
  if (mcommand.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (mcommand.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${mcommand.name} ${mcommand.usage}\``;
    }
    return message.channel.send(reply);
  }
  
  try {
    client.mcommands.get(mcommandName).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(
      ":warning: There was an error trying to execute that command! :warning:"
    );
  }
});
client.on("message", message =>{
  if (message.content === "Ded Chat"){
    message.channel.send('I agree. :white_check_mark:');
  }else if (message.content === "FBI"){
    message.channel.send(":gun: FBI OPEN UP! :gun:");
  }
});
client.login(token);
