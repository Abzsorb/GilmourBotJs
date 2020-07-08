const commando = require("discord.js-commando")
const fetch = require("node-fetch")

module.exports = class Doggo extends commando.Command{
    constructor(client){
        super(client,{
            name:'doggo',
            group:'fun',
            memberName:'doggo',
            description:'Posts an Image of a random doggo'
        })
    }
    async run(message){
        const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
        message.channel.send(url)       
    }
}