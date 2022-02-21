const { Client } = require("discord.js")



module.exports = {
    name:'stonk',
    discription:"this will tell you all the commands",
    execute(message, args, Discord){

        
            const embed = new Discord.MessageEmbed()
                .setTitle('Stocks')
                .setColor('#40dd21')
                .addFields(
                    {name:'-kulr', value:'Price of KULR TECHNOLOGY'},
                    {name:'-spy', value:'Price of SPY'},
                    {name:'-f', value:'Price of FORD MOTOR'},
                    {name:'-sli', value:'Price of STANDARD LITHIUM'},
                    {name:'-tlry', value:'Price of TILRAY BRANDS'},
                    {name:'-btc', value:'Price of BITCOIN'},
                    {name:'-chpt', value:'Price of CHARGE POINT'},
                    {name:'-doge', value:'Price of DOGE COIN'},
                    {name:'-eth', value:'Price of ETHEREUM'},
                    {name:'-amc', value:'Price of AMC'},
                    
                )
                message.channel.send(embed)

        }
    
}