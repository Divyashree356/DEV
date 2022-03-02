// let url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')
const { html } = require('cheerio/lib/api/manipulation')
const { hasClass } = require('cheerio/lib/api/attributes')
const path = require('path')
const fs = require('fs')
const xlsx= require('xlsx')

function processScoreCard(url) {

    request(url, cb)
}


function cb(err, response, html) {
    if (err)
        console.error(err)

    else
        indexElements(html)
}

function indexElements(html) {
    let $ = cheerio.load(html);

    let description = $('.header-info .description');
    // console.log(description.text())

    let discriptionArray = description.text().split(',');
    // console.log(discriptionArray);

    let venue = discriptionArray[1].trim();
    let date = discriptionArray[2].trim(); //trim removes extra spaces

    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width  .status-text');

    console.log(result.text())
    console.log(venue);
    console.log(date);
    // console.log('``````````````````````````````````````````````````````````````````')
    let innings = $(".card.content-block.match-scorecard-table .Collapsible")
    let htmlString = '';
    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html();

        let teamName = $(innings[i]).find('h5').text();
        teamName = teamName.split('INNINGS')[0].trim();

        let opponentIndex = i == 0 ? 1 : 0;
        let opponentName = $(innings[opponentIndex]).find('h5').text();
        opponentName = opponentName.split('INNINGS')[0].trim();

        //    console.log(teamName , opponentName)

        let currInning = $(innings[i])
        let allRows = currInning.find('.table.batsman tbody tr');

        for (let j = 0; j < allRows.length; j++) {
            let allColumns = $(allRows[j]).find('td')
            let batsMen = $(allColumns[0]).hasClass('batsman-cell');
            if (batsMen == true) {
                let batsmanName = $(allColumns[0]).text().trim();
                let runs = $(allColumns[2]).text().trim();
                let balls = $(allColumns[3]).text().trim();
                let fours = $(allColumns[5]).text().trim();
                let sixes = $(allColumns[6]).text().trim();
                let strikeRate = $(allColumns[7]).text().trim();

                //template literals
                console.log(`${batsmanName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${strikeRate}`)

                processPlayerDetails(teamName, opponentName, batsmanName, runs, balls, fours, sixes, strikeRate, venue, date, result);


            }

        }

        console.log("```````````````````````````````````````````````````````````````````````````")
    }
    //  console.log(htmlString)
}
function processPlayerDetails
    (   teamName,
        opponentName,
        batsmanName,
        runs,
        balls,
        fours,
        sixes,
        strikeRate,
        venue,
        date,
        result
        ) {
    let teamPath = path.join(__dirname, "IPL", teamName);
    createDir(teamPath)

    let playerPath= path.join(teamPath  , batsmanName +'.xlsx');

    let content =xlsxReader(playerPath , batsmanName);
    

    let playerObj=
    {   teamName,
        opponentName,
        batsmanName,
        runs,
        balls,
        fours,
        sixes,
        strikeRate,
        venue,
        date,
        result,
     };

    content.push(playerObj)

    xlsxWriter(content ,  batsmanName,  playerPath )

}
function createDir(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }
}

 function xlsxWriter(jsonData ,sheetName , fileName)
 {
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(jsonData);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, fileName);
 }

 function xlsxReader(fileName ,sheetName)
 {

    if(fs.existsSync(fileName)==false)
     return [];

    let wb = xlsx.readFile(fileName);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
 }
module.exports = {

    ps: processScoreCard
};



