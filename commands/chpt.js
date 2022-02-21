const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'doge',
    discription:"this will tell you the price of kulr",
    execute(message, args){
        let price = null;

        function scrapeDoge(){
            request('https://www.marketwatch.com/investing/cryptocurrency/dogeusd?iso=kraken&mod=over_search', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of DOGE COIN is $${price}`)

                }


            })


        }
            
        scrapeDoge()
      
    }  
}