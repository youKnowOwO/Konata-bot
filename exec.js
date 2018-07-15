const { ShardingManager } = require('discord.js');
const { SHARD } = require('assets/json/config.json');
const NEW_SHARD = new ShardingManager('./src/main.js', {
	totalShards: SHARD,
	token: process.env.TOKEN
});

NEW_SHARD.spawn();

NEW_SHARD.on('launch', 💎 => {
	console.log(`💎 Launching Shard ${💎.id} [${💎.id+1} of ${NEW_SHARD.totalShards}]`);
});
