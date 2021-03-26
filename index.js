const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "?";
const TOKEN = 'ODI0NTczOTA0Njg4Nzc1MjI4.YFxWSg.poGQ8D8Mgj7et9O5XXyTcpCBPGA';

var version = "1.0.0";

bot.on('ready', () => {
    console.log('Der Bot ist nun einsatzbereit')

    bot.user.setActivity('Deinen probleme', {type: 'LISTENING'}).catch(console.error)
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){

        case 'help':
            message.channel.send('du brauchst hilfe ? hier eine liste mit allen commands:\n!ping = du siehst ob ich funktioniere\n!clear "wort" = das wort wird gelöscht')
        break;

        case 'ping':
            message.channel.send('pong')
        break;

        case 'clear':
            if(!args[1]) return message.channel.send('fehler bitte zweites wort eingeben')
            message.channel.bulkDelete(args[1])
        break;


    }
})


bot.login(TOKEN)