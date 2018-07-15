exports.run = (client, msg) => {
	if(!msg.channel || msg.author.bot || msg.content.startsWith(client.config.PREFIX)) return;
	
	const content = msg.content.trim().slice(client.config.PREFIX).split(' ');
	const command = content[0].toLowerCase();
	const args = content.slice(1);
	
	try{
		let cmd;
		if(client.commands.has(command)){
			cmd = client.commands.get(command);
		}else if(client.aliases.has(command)){
			cmd = client.commands.get(client.aliases.get(command));
		}
		
		cmd.run(client, msg, args);
	}catch (e){
		console.error(e);
	}
}
