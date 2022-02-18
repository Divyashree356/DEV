const request = require('request')
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');

console.log('before')

request('https://www.worldometers.info/coronavirus/', cb)


function cb(error, response, body) {
    if (error) {
        console.error(error);
    }
    else {
        // console.log('body' ,body)
        handelHtml(body)
    }
}

function handelHtml(html) {
    //selector tool is used to load all the html on it so that it can be processed
    let selTool = cheerio.load(html);
    // console.log(selTool);

    let contentArr = selTool('.maincounter-number span');
    // console.log(contentArr);

    // for(let i=0; i< contentArr.length ; i++)
    // {
    //     let data= selTool(contentArr[i]).text()
    //       console.log(data)
    // }


    //text function id used to take out the understandable text from html 

    let totalCases = selTool(contentArr[0]).text();
    console.log('total cases: ' + totalCases)

    let Deaths = selTool(contentArr[1]).text()
    console.log('Deaths: ' + Deaths)

    let Recovered = selTool(contentArr[2]).text();
    console.log('Recovered: ' + Recovered)
}

console.log('after')