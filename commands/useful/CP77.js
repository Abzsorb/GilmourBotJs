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
        Days = countdown(new Date(), new Date(2020,10,19, countdown.DAYS)).toString
        Months = countdown(new Date(2020,10,19)).toString
        message.reply(`Cyberpunk will release in ${Months} (${Days})`)
    }
}
