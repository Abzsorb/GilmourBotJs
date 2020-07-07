const { CommandoClient } = require('discord.js-commando');
const path = require('path')
const client = new CommandoClient({
    commandPrefix: process.env.prefix,
    owner: process.env.ownerId, 
})

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('With Commando')
    
})
client.registry.registerGroups([
    ['fun', 'Fun commands'],
    ['useful', 'Useful commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.on('error', console.error)

client.login(process.env.TOKEN)