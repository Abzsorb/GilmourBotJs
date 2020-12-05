const commando = require("discord.js-commando")

module.exports = class Thisguy extends commando.Command{
    constructor(client){
        super(client,{
            name:'slam',
            group:'fun',
            memberName:'slam',
            description:'Slams the table'
        })
    }
    async run(message){
        message.channel.send("https://tenor.com/view/xqc-slam-slam-desk-desk-slam-xqc-slam-gif-19145485")
    }
}