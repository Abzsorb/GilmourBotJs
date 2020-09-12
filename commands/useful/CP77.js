const commando = require("discord.js-commando")
const countdown = require("../../node_modules/countdown.js")

module.exports = class Dice extends commando.Command{
    constructor(client){
        super(client,{
            name:'cp77',
            group:'useful',
            memberName:'cp77',
            description:'Gives you how much time is left until Cyberpunk 2077 to come out'
        })
    }
    async run(message){
        
        message.reply(countdown(new Date(2020, 11, 19)).toString())
        
        
    }
}
