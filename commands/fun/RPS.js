const {commando} = require("discord.js-commando")

module.exports = class RPS extends commando.Command{
    constructor(client){
        super(client,{
            name:'rps',
            group:'fun',
            memberName:'rps',
            description:'Play Rock, Paper, Scissors with the Bot',
            args:[
                {
                    key: 'text',
                    prompt: 'Pick either Rock, Paper or Scissors',
                    type: 'string',
                }
            ]
        })
    }
    async run(message, { text }) {
        text = text.toLowerCase();
        var x = Math.floor((Math.random()* 3) + 1 )
        if (text == 'rock'){
            if (x == 3){
                message.reply(":right_facing_fist: vs :v: You have won!")
            }else if (x == 2){
                message.reply(":right_facing_fist: vs :hand_splayed: You have lost!")
            }else {
                message.reply(":right_facing_fist: vs :left_facing_fist: It's a draw")
            }
        }
        else if (text == "paper"){
            if (x == 3){
                message.reply(":hand_splayed: vs :left_facing_fist: You have won!")
            }else if (x == 2){
                message.reply(":hand_splayed: vs :v: You have lost!")
            }else{
                message.reply(":hand_splayed: vs :hand_splayed: It's a draw")
            }
        }
        else if (text == "scissors"){
            if (x == 3){
                message.reply(":v: vs :hand_splayed: You have won!")
            }else if (x == 2){
                message.reply(":v: vs :left_facing_fist: You have lost!")
            }else{
                message.reply(":v: vs :v: It's a draw")
            }
        }
    }    
}