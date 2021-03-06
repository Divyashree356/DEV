const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')
const getMatchobj = require('./allMatch')
const allMatch = require('./allMatch')
const fs = require('fs')
const path = require('path')

let iplPath = path.join(__dirname, "IPL");
// console.log(iplPath)
createDir(iplPath);

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

    allMatch.getAllMatches(fullLink);
}


function createDir(IPLfolderPath) {
    if (fs.existsSync(IPLfolderPath) == false) {
        fs.mkdirSync(IPLfolderPath);
    }
}


