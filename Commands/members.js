const Discord = require(`discord.js`);
const configFile = require('../config.json');

module.exports = async(client, msg, args, prefix, message) => {
let member = message.guild.members;
let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
    on = member.cache.filter(m => m.user.presence.status === "online").size,
    idle = member.cache.filter(m => m.user.presence.status === "idle").size,
    dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
    robot = member.cache.filter(m => m.user.bot).size,
    total = message.guild.memberCount;
    online = on - robot - 1;
    if (msg.startsWith(prefix + "members")) {
        const memberEmbed = new Discord.MessageEmbed()
        .setTitle("Billybobbeep | Server Members")
        .addField("Total Members:", `${total}`, true)
        .addField("Offline Members:", `${offline}`, true)
        .addField("Online Members:", `${online}`, true)
        .addField("Idle Members:", `${idle}`, true)
        .addField("DND Members:", `${dnd}`, true)
        .addField("Bots:", `${robot}`, true)
        .setColor([235, 188, 245])
        .setFooter(`Requested by: ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(memberEmbed)
    }
}