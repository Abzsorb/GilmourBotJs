const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { type } = require('os');
const { options } = require('superagent');
const client = new CommandoClient({
    commandPrefix: process.env.prefix,
    owner: process.env.ownerId, 
})

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('AvoidingThePuddle', {type:"WATCHING"})
    
})
client.on('message', message =>{
    const bannedWords = ["fortnite"]
    if (bannedWords.some(word => message.content.includes(word))){
        message.delete()
        message.reply("This word is banned by the server owner")
    }
})
client.registry.registerGroups([
    ['fun', 'Fun commands'],
    ['useful', 'Useful commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.on('error', console.error)

client.login(process.env.TOKEN)