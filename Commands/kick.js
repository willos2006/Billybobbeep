const Discord = require(`discord.js`);
const configFile = require('../config.json');

module.exports = async(client, msg, args, prefix, message) => {
    if (msg.startsWith(prefix + "kick")) {
        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the permission to run this command.")
        let user = message.mentions.users.first();

        let member = message.guild.member(user);
        let reason = args.slice(1).join(" ");
        
        if (!user) return message.channel.send("Please mention a user to kick.");
        if (user.id === message.author.id) return message.channel.send("You cannot kick yourself from the server.");
        if (user.id === client.user.id) return message.channel.send("You cannot kick me. :'(");
        if (!reason) reason = "No reason provided";

        member.kick(reason).then(() => {
            message.channel.send(`Successfully kicked **${user.tag}**`);
            console.log(`${message.author.username} successfully kicked **${user.tag}**`);
            let LoggingChannel = client.channels.cache.get(configFile.LoggingChannel);

        let pinned;
        if (message.pinned) {
            pinned = true
        } else {
            pinned = false
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(`Kicked Member`)
        .setDescription(`**Channel:** ${message.channel}
                        **Member Kicked:** ${user.tag}\n
                        **Moderator:** ${message.author}
                        **Moderator Tag:** ${message.author.tag}`)
        .setTimestamp()
        .setColor("#a9d9b7")
        LoggingChannel.send(embed)

        }).catch(err => {
            message.reply("I was unable to kick the member you provided.");
        })
    }
}