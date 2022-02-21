const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'sli',
    discription:"this will tell you the price of Ford Motor",
    execute(message, args){
        let price = null;

        function scrapeSli(){
            request('https://www.marketwatch.com/investing/stock/sli?mod=over_search', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of STANDARD LITHIUM is $${price}`)

                }


            })


        }
            
        scrapeSli()
      
    }  
}