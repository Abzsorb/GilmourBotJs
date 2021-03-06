const { CommandoClient } = require('discord.js-commando');
const { MessageAttachment } = require('discord.js');
const { type } = require('os');
const path = require('path');
const bannedWords = ["fortnite", "!fortnite"]
const client = new CommandoClient({
    commandPrefix: process.env.prefix,
    owner: process.env.ownerId, 
})

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Demon\'s Souls', {type:"PLAYING"})
    
})
// client.on('message', message =>{
//     if (message.author.id == "408246981702713355"){   
//     if (bannedWords.some(word => message.content.toLowerCase().includes(word))){
//         message.delete()
//         message.reply("")
//     }
// }
// })
client.registry.registerGroups([
    ['fun', 'Fun commands'],
    ['useful', 'Useful commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.on('error', console.error)

client.login(process.env.TOKEN)