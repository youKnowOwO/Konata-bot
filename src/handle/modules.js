const { Collection } = require('discord.js');
const { join, resolve} = require('path');
const { readdirSync, statSync} = require('fs');

const commands = new Collection();
const aliases = new Collection();
const help = [];

let modules = readdirSync('../commands/').filter(file => fs.statSync(join('./cmd/', file)).isDirectory());
for(let module of modules){
	console.log(module);
	help[modules.indexOf(module)] = {
		name: require(`../commands/${module}/settings.json`).name,
		emoji: require(`../commands/${module}/settings.json`).emoji,
		commands: []
	};
	
	let commandFiles = readdirSync(resolve(`../commands/${module}`))
	.filter(file => !statSync(resolve(`../commands/${module}/${file}`)).isDirectory())
	.filter(file => file.endsWith('.js'));
	
	for(let file of commandFiles){
		file = file.substr(0, file.length-3);
		console.log('└──' + file);
		help[modules.indexOf(module)].commands.push(`\`${file}\``);
		
		file = require(`../commands/${module}/${file}`);
		file.conf.group = help[modules.indexOf(module)].name;
		commands.set(file.help.name.toLowerCase(), file);
		for(let alias of file.conf.aliases){
			aliases.set(alias.toLowerCase(), file.help.name);
		}
	}
}

exports.commands = commands;
exports.aliases = aliases;
exports.help = help;
