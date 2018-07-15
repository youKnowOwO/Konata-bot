const { RichEmbed } = require('discord.js');

exports.run = async (client, msg, args){
	const pingMessage = await msg.channel.send('Ping....');
	
	const embed = new RichEmbed()
	.setColor('RANDOM')
	.setTitle('🏓 Pong !!!')
	.setDescription(`
⏳__**Latency:**__ \`${pingMessage.createdTimestamp - msg.createdTimestamp}ms\`
💓__**API:**__ \`${Math.floor(client.ping)}ms\`
	`);
	pingMessage.edit(embed);
}

exports.conf = {
	aliases: ['pong'],
	perms: 'none',
	botPerms: 'MESSAGE_ADD'
}

exports.help = {
	name: 'ping',
	description: 'Ping Pong! why not try ?',
	usage: 'ping',
	example: 'ping'
}
