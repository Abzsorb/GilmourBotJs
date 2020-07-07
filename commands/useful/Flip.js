const commando = require("discord.js-commando")

module.exports = class Flip extends commando.Command{
    constructor(client){
        super(client,{
            name:'flip',
            group:'useful',
            memberName:'flip',
            description:'Flips a contain and gives 2 potential results Heads or Tails'
        })
    }
    async run(message){
        var x = Math.floor((Math.random()* 2) + 1 )
        if (x == 1){
            message.reply(`The coin has landed on Heads`)
        }
        else if (x == 2){
            message.reply(`The coin has landed on Tails`)
        }
    }
}