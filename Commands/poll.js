const Discord = require(`discord.js`);
const configFile = require('../config.json');

//[Main Varables]\\
let title;
let description;
let color;
let channel;
let autherValid;

module.exports = async(client, msg, args, prefix, message) => {
    if (msg.startsWith(prefix + "poll")) {
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ')

        let embedPoll = new Discord.MessageEmbed()
            .setTitle('New Poll!')
            .setDescription(pollDescription)
            .setColor([108, 245, 169])
            .setFooter(`Poll created by: ${message.author.tag}`)
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    } 
}   