const commando = require("discord.js-commando")

module.exports = class Thisguy extends commando.Command{
    constructor(client){
        super(client,{
            name:'thisguy',
            group:'fun',
            memberName:'thisguy',
            description:'Posts a picture of jerry laughing'
        })
    }
    async run(message){
        message.channel.send({files:["https://i.imgur.com/RQ7aAUS.jpg"]})
    }
}