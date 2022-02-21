const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'spy',
    discription:"this will tell you the price of Spy",
    execute(message, args){
        let price = null;

        function scrapeSpy(){
            request('https://www.marketwatch.com/investing/fund/spy?mod=over_search', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of SPY is $${price}`)

                }


            })


        }
            
        scrapeSpy()
      
    }  
}