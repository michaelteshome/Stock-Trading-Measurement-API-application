const https = require('https');
//comapny value must be the name of your equity choice.
//ex: Starbucks -> SBUX
function getDailyStock(type, company){
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_${type.toUpperCase()}&symbol=${company.toUpperCase()}&interval=15min&outputsize=full&apikey=OJW9LPA2XI3CHNO6`;
    let body = "";
    let stocks;
    try{
      const request = https.get(url, (response)=>{
          
          response.on('data', (d)=>{
              body += d.toString();
          });
          
          response.on('end', ()=>{
                stocks = JSON.parse(body);
                console.log(stocks);
          });
          
      });
    }
    catch(e){
      console.error(e.message);
    }
}

module.exports.dailyStock = getDailyStock;
