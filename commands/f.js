const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'f',
    discription:"this will tell you the price of Ford Motor",
    execute(message, args){
        let price = null;

        function scrapeF(){
            request('https://www.marketwatch.com/investing/stock/f?mod=over_search', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of FORD MOTOR is $${price}`)

                }


            })


        }
            
        scrapeF()
      
    }  
}