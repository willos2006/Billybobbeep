const Discord = require(`discord.js`);
const configFile = require('../config.json');

module.exports = async(client, msg, args, prefix, message) => {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You do not have the permissions to do this.");
    
let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(`You did not mention a user.`);
    if (!args.slice(1).join(" ")) return message.channel.send("Please specify a message.");

    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("An errror accured whilst running the command."))
      .then(() => message.channel.send(`Message sent to ${user.user.tag}.`));
  }