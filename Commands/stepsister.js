const Discord = require(`discord.js`);
const configFile = require('../config.json');

module.exports = async(client, msg, args, prefix, message) => {
    if (msg.startsWith(prefix + "stepsister")) {
        message.channel.send("https://cdn.discordapp.com/attachments/731508540761440336/732301974543794297/8296f82029ae59b698060544deb1531a.png");
    }
}