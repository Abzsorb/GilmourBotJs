const commando = require("discord.js-commando")

module.exports = class RPS extends commando.Command{
    constructor(client){
        super(client,{
            name:'timetable',
            group:'useful',
            memberName:'timetable',
            description:'Sends Timetable',
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
        if (text == 'S4.2A'){
            message.channel.send({files:["https://i.imgur.com/jKAEIH7.png"]})
        }
        else if (text == "M4.2A"){
            message.channel.send({files:["https://i.imgur.com/tDsbL6n.png"]})
        }
        else if (text == "M4.2C"){
            message.channel.send({files:["https://i.imgur.com/tDsbL6n.png"]})
        }
    }    
}