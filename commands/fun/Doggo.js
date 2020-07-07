const commando = require("discord.js-commando")
const {superAgent} = require('superagent')

module.exports = class Doggo extends commando.Command{
    constructor(client){
        super(client,{
            name:'doggo',
            group:'fun',
            memberName:'doggo',
            description:'Posts an Image of a random doggo'
        })
    }
    async run(message){
        var dog;
        dog = await superAgent
            .get('https://random.dog/woof.json')

        message.channel.send(dog.body.url)
    }
}