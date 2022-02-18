const request = require('request')
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';

request(url, cb);

function cb(error, response, body) {
    if (error) { console.log(error) }

    else {
        // console.log(body);
        handelHtml(body)
    }

}
function handelHtml(html) {

    let selTool = cheerio.load(html);
    // console.log(selTool)

    let contentArr = selTool('.match-comment-wrapper .match-comment-long-text')

    let lastBallComm = selTool(contentArr[0]).text();
    console.log(lastBallComm);


}