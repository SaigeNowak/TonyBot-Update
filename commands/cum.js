const path = require('path')


module.exports = {
    name:'cum',
    discription:"this will tell you its time to tony",
    
  async execute(message){
    const  voiceChannel = message.member.voice.channel;
    if(!voiceChannel){return message.channel.send('you need to be in a channel to use this command');
    }

    function randCum() {
        var rand = ['1','2','3','4','5'];

        return rand[Math.floor(Math.random()*rand.length)];


    }

            if(randCum()=== '1'){
                voiceChannel.join().then((connection)=>{
                    connection.play(path.join(__dirname, 'haha1.mp3'))
                    .on('finish', ()=>{
                      voiceChannel.leave();
                     })

                })

            
            }else if(randCum()=== '2'){
                voiceChannel.join().then((connection)=>{
                    connection.play(path.join(__dirname, 'haha2.mp3'))
                    .on('finish', ()=>{
                      voiceChannel.leave();
                     })

                })

            }else if(randCum()=== '3'){
                voiceChannel.join().then((connection)=>{
                    connection.play(path.join(__dirname, 'haha3.mp3'))
                    .on('finish', ()=>{
                      voiceChannel.leave();
                     })

                })

            }else if(randCum()=== '4'){
                voiceChannel.join().then((connection)=>{
                    connection.play(path.join(__dirname, 'haha4.mp3'))
                    .on('finish', ()=>{
                      voiceChannel.leave();
                     })

                })

            }else if(randCum()=== '5'){
                voiceChannel.join().then((connection)=>{
                    connection.play(path.join(__dirname, 'haha5.mp3'))
                    .on('finish', ()=>{
                      voiceChannel.leave();
                     })

                })

            }

            
                       



                    
                
 }
}
           