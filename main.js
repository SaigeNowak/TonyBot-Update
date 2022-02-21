const Discord = require ('discord.js');

const Client = new Discord.Client();

const prefix = '-';

const fs = require ('fs');

const keepAlive = require('./server.js');

Client.command = new Discord.Collection();

const { OpusEncoder } = require('@discordjs/opus');



const encoder = new OpusEncoder(48000, 2);





const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command =require(`./commands/${file}`);

        Client.command.set(command.name, command);
    }



Client.once('ready', ()=>{
    console.log('Tony Bot is Ready');
});

keepAlive();

Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'tony'){
        Client.command.get('tony').execute(message, args);
    }else if(command === 'play'){
        Client.command.get('play').execute(message, args);
    }else if(command === 'stop'){
        Client.command.get('stop').execute(message, args);
    }else if (command === 'help'){
        Client.command.get('help').execute(message, args, Discord);
    }else if (command === 'tonytime'){
        Client.command.get('tonytime').execute(message, args);
    }else if (command === 'flip'){
        Client.command.get('flip').execute(message, args, Discord);
    }else if (command === 'thiswasabadideaohno'){
        Client.command.get('thiswasabadideaohno').execute(message, args);
    }else if (command === 'stonk'){
        Client.command.get('stonk').execute(message, args, Discord);
    }else if (command === 'kulr'){
        Client.command.get('kulr').execute(message, args,);
    }else if (command === 'spy'){
        Client.command.get('spy').execute(message, args,);
    }else if (command === 'f'){
        Client.command.get('f').execute(message, args,);
    }else if (command === 'sli'){
        Client.command.get('sli').execute(message, args,);
    }else if (command === 'tlry'){
        Client.command.get('tlry').execute(message, args,);
    }else if (command === 'btc'){
        Client.command.get('btc').execute(message, args,);
    }else if (command === 'chpt'){
        Client.command.get('chpt').execute(message, args,);
    }else if (command === 'doge'){
        Client.command.get('doge').execute(message, args,);
    }else if (command === 'eth'){
        Client.command.get('eth').execute(message, args,);
    }else if (command === 'timer'){
        Client.command.get('timer').execute(message, args,);
    }else if (command === 'cum'){
        Client.command.get('cum').execute(message, args,);
    }else if (command === 'amc'){
        Client.command.get('amc').execute(message, args,);
    }
})
/*test bot*/  //Client.login('OTM4MTYzNzU3NzU3MTEyMzQy.YfmTFg.CSScjHra8TYnyt4Yg0R5o2sHneM')

/*Tony Bot*/  Client.login('OTM3NzYxMTcwODM4OTE3MTMw.YfgcJQ.bflTxz9lk_TjleWongLcnJTgg8g')

