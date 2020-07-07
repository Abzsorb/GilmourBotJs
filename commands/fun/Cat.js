const commando = require("discord.js-commando")
const fetch = require("node-fetch")

module.exports = class Cat extends commando.Command{
    constructor(client){
        super(client,{
            name:'cat',
            group:'fun',
            memberName:'cat',
            description:'Posts an Image of a random cat'
        })
    }
    async run(message){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
    }
}