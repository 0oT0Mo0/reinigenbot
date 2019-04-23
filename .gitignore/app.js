const discord = require('discord.js');
const client = new discord.Client;


const channelID = '486590616780931093';

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setActivity('son developpement', {type: 'WATCHING'});
});

client.on('guildMemberAdd', function (member) {
    updateStatus(member.guild);
});

client.on('guildMemberRemove', function (member) {
    updateStatus(member.guild);
});

client.on('presenceUpdate', function (member) {
    updateStatus(member.guild);
});

function updateStatus(guild){
    let max = guild.memberCount-1;
    let online = guild.members.filter(m => m.presence.status != 'offline').size-1;
    let formatString = '💡Informations💡 | ' + online + '/' + max;
    let channel = guild.channels.get(channelID);
    if(channel.name !== formatString){
        channel.setName(formatString);
    }
}




client.login('NTYxNTk3MzA0NjA0MzI3OTM2.XJ-tjg.a1YnPOUqushNDGHa54W2jMZ3Xvk');
