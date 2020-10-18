const commando = require("discord.js-commando")

module.exports = class RPS extends commando.Command{
    constructor(client){
        super(client,{
            name:'timetable',
            group:'useful',
            memberName:'timetable',
            description:'Sends Timetable Choices: S4.2A, M4.2A, M4.2C',
            args:[
                {
                    key: 'text',
                    prompt: 'Pick which time table',
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
            message.channel.send({files:["https://i.imgur.com/tDsbL6n.png"]})
        }
    }    
}