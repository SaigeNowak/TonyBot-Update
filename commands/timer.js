const Discord = require ('discord.js');

module.exports = {
    name:'timer',
    discription:"this will countdown",
    execute(message, args){

        let count = args[0]
        let countDown;
        if(!args[0])return message.channel.send('you need to set a time')

        message.channel.send(`Timer set for ${count} minutes`).then(msg => {
            countDown=msg
            count--
        })

        const counter = setInterval(async ()=>{
            if(count == args[0]){
                  count--
                
                
            }else if(count>0){
                countDown.edit(`${count} Minutes remaining!`)
                count--
            }else{
                countDown.edit('Done')
            }

        },60000)

    }
}