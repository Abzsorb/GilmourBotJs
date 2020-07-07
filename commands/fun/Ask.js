const commando = require("discord.js-commando")
const {RichEmbed} = require('discord.js')

module.exports = class Ask extends commando.Command{
    constructor(client){
        super(client,{
            name:'ask',
            group:'fun',
            memberName:'ask',
            description:'Ask GilmourBot a question and he will reply',
            args:[
                {
                    key: 'question',
                    prompt: 'Ask a question',
                    type: 'string',
                }
            ]
        })
    }
    async run(message, { question }) {
        var replies = ["It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."]
        let result = Math.floor((Math.random() * replies.length))
        let ballembed = new RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#00FF00")
            .addField("Question", question, false)
            .addField("Answer", replies[result], false)
            
        message.channel.send(ballembed)

}
}