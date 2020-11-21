const commando = require("discord.js-commando")
const countdown = require("./countdown.js")

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
        const time = countdown(new Date(), new Date(2020, 11, 10, 0), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.MILLISECONDS ).toString()
        message.reply(`Cyberpunk will release in ${time}`)
    }
}
