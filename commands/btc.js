const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'btc',
    discription:"this will tell you the price of Ford Motor",
    execute(message, args){
        let price = null;

        function scrapeBtc(){
            request('https://www.marketwatch.com/investing/cryptocurrency/btcusd', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of BITCOIN is $${price}`)

                }


            })


        }
            
        scrapeBtc()
      
    }  
}