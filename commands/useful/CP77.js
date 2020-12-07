const commando = require("discord.js-commando");
const countdown = require("./countdown.js");

module.exports = class Dice extends (
  commando.Command
) {
  constructor(client) {
    super(client, {
      name: "cp77",
      group: "useful",
      memberName: "cp77",
      description:
        "Gives you how much time is left until Cyberpunk 2077 to come out",
    });
  }
  async run(message) {
    var dateFuture = new Date(2020,11,10,1);
    var dateNow = new Date();

    var seconds = Math.floor((dateFuture - dateNow) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    message.reply(`Cyberpunk will release in ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
  }
};
