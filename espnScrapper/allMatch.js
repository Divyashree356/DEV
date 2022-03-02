const cheerio = require('cheerio')
const request = require('request')
const scoreCardObj = require('./scoreCard')

function getAllMatchesLink(uri) {
    request(uri, function (err, response, html) {
        if (err)
            console.err(err)

        else
            // console.log(html)
            extractAllLink(html)
    })
}

function extractAllLink(html) {
    let $ = cheerio.load(html);

    let scoreCardArray = $('a[data-hover="Scorecard"]')

    for (let i = 0; i < scoreCardArray.length; i++) {
        let link = $(scoreCardArray[i]).attr('href');
        let fullLink = 'https://www.espncricinfo.com/' + link;
        // console.log(fullLink);
        scoreCardObj.ps(fullLink)
    }

}

module.exports = {
    getAllMatches: getAllMatchesLink
}