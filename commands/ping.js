module.exports = {
	name: 'ping',
	description: 'Ping!',
  staffOnly: 'true',
  dev: 'false',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};