const cheerio = require('cheerio')

const request = require('request')


module.exports = {
    name:'eth',
    discription:"this will tell you the price of kulr",
    execute(message, args){
        let price = null;

        function scrapeEth(){
            request('https://www.marketwatch.com/investing/cryptocurrency/ethusd', (error, Response, html) =>{
                if(!error && Response.statusCode ==200){
                        const $ = cheerio.load(html)
                        price = $('.intraday__price ').children('bg-quote').text()

                    
                

                        message.channel.send(`Price of ethereum is $${price}`)

                }


            })


        }
            
        scrapeEth()
      
    }  
}