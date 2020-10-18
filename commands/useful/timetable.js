const commando = require("discord.js-commando")

module.exports = class RPS extends commando.Command{
    constructor(client){
        super(client,{
            name:'timetable',
            group:'useful',
            memberName:'timetable',
            description:'Sends Timetable Choices: S4.2A, M4.2A, M4.2C, M6.1B',
            args:[
                {
                    key: 'text',
                    prompt: 'Pick your timetable: S4.2A, M4.2A, M4.2C, M6.1B',
                    type: 'string',
                }
            ]
        })
    }
    async run(message, { text }) {
        text = text.toLowerCase();
        if (text == 's4.2a'){
            message.channel.send({files:["https://i.imgur.com/jKAEIH7.png"]})
        }
        else if (text == "m4.2a"){
            message.channel.send({files:["https://i.imgur.com/tDsbL6n.png"]})
        }
        else if (text == "m4.2c"){
            message.channel.send({files:["https://i.imgur.com/2bNBGed.png"]})
        }
        else if(text = "m6.1b"){
            message.channel.send({files:["https://i.imgur.com/nG7wn0s.png"]})
        }
    }    
}