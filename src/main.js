const { Client } = require('discord.js');
const { readdir } = require('fs');
const Modules = require('./handle/modules.js');

class KanaSou extends Client {
	constructor(ops){
		super(ops);
		this.commands = Modules.commands;
		this.aliases = Modules.aliases;
		this.help = Modules.help;
		this.env = process.env;
	}
}

const client = new KanaSou({
	fetchAllMembers: true,
	disableEveryone: true
});

readdir('./events', (e, files) => {
	if(err) console.error(e);
	files.forEach(f => {
		const eventFunc = require(`./events/${f}`);
		const eventName = f.split('.')[0];
		client.on(eventName, (...args) => eventFunct.run(client, ...args));
	});
});

client.login(client.env.TOKEN);
