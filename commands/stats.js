const { name, version, iconURL } = require('../package.json');
const { prefix, mprefix } = require('../config.json');
module.exports = {
  name: 'stats',
  description: 'Shows the stats if the bot',
  dev: 'false',
  execute(message, args){
    const statembed = {
      color : 0x00d9a6,
      title: "Bot Stats",
      description: "Here are the bot's stats",
      fields: [
        {
          name: "Bot Name",
          value: `${name}`,
        },
        {
          name: "Version",
          value: `${version}`,
        },
        {
          name: "General Prefix",
          value: `${prefix}`,
          inline: true,
        },
        {
          name: "Moderator Prefix",
          value: `${mprefix}`,
          inline: true,
        },
      ],
      image:{
        url: `${iconURL}`,
      },
    };
    message.channel.send({embed: statembed});
  }
}
