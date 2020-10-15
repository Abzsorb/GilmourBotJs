const commando = require("discord.js-commando")

module.exports = class Dice extends commando.Command{
    constructor(client){
        super(client,{
            name:'lifepath',
            group:'useful',
            memberName:'lifepath',
            description:'Gives you a random Cyberpunk 2077 Life path'
        })
    }
    async run(message){
        var x = Math.floor((Math.random()* 3) + 1 )
        if (x == 1){
            message.reply('Your lifepath is Nomad')
        }
        else if(x == 2){
            message.reply('Your lifepath is Street Kid')
        }
        else if (x == 3){
            message.reply('Your lifepath is Corporate')
        }
        
    }
}