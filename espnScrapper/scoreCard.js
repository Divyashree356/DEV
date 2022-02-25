let url='https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')
const { html } = require('cheerio/lib/api/manipulation')

request(url , cb)

function cb(err , response ,html)
{
    if(err)
     console.error(err)

     else
      indexElements(html)
}

function indexElements(html)
{
    let $ = cheerio.load(html);

    let description=  $('.header-info .description');
    // console.log(description.text())

    let discriptionArray = description.text().split(',');
    // console.log(discriptionArray);

    let venue= discriptionArray[1].trim();
    let date = discriptionArray[2].trim(); //trim removes extra spaces
   
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width  .status-text');

    console.log(result.text())
    console.log(venue);
    console.log(date);

}
