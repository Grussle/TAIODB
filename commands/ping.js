module.exports = {
	name: 'ping',
	description: 'Ping!',
  dev: 'false',
	execute(message, args) {
		message.channel.send('Pong.');
	}
};