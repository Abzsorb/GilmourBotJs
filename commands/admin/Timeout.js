const commando = require('discord.js-commando')

module.exports = class Ask extends commando.Command{
    constructor(client){
        super(client,{
            name:'timeout',
            group:'admin',
            memberName:'timeout',
            description:'Timeout a users',
            ownerOnly: true,
            args:[
                {
                  key: 'user',
                  prompt: 'The Tag of the User',
                  type: 'user',
                },
                {
                    key: 'amount',
                    prompt: 'The amount you want to timeout for',
                    type: 'integer',
                }
            ]
        })
    }
    async run(message, user, amount){
        
    }
}

