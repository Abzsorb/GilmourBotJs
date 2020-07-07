const {commando} = require("discord.js-commando")

module.exports = class Dice extends commando.Command{
    constructor(client){
        super(client,{
            name:'dice',
            group:'useful',
            memberName:'dice',
            description:'Rolls a dice and gives result between 1-6'
        })
    }
    async run(message){
        var x = Math.floor((Math.random()* 6) + 1 )
        message.reply(`The Dice has landed on ${x}`)
    }
}