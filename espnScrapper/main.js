const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

request(url, cb)

function cb(err, response, html) {
    if (err)
        console.error(err);

    else
        extractLink(html)
    //  console.log(html)
}

function extractLink(html) {
    let $ = cheerio.load(html)
    let anchorElement = $('a[data-hover="View All Results"]')

    let link = anchorElement.attr('href');
    let fullLink = 'https://www.espncricinfo.com/' + link;

    // console.log(fullLink);

    getAllMatchesLink(fullLink);
}

function getAllMatchesLink(uri)
{
    request(uri , function(err ,response , html)
    {
        if(err)
         console.err(err)

        else 
        // console.log(html)
        extractAllLink(html)
    })
}

function extractAllLink(html)
{
    let $ =cheerio.load(html);

    let scoreCardArray = $('a[data-hover="Scorecard"]')

    for(let i=0;i<scoreCardArray.length;i++)
    {
        let link= $(scoreCardArray[i]).attr('href');
        let fullLink = 'https://www.espncricinfo.com/'+link;
        console.log(fullLink);
    }

}
