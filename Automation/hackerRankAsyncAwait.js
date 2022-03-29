let puppeteer = require('puppeteer');
const { answers } = require('./code');
let codeFile = require('./code')
let email='neheba3007@zneep.com';
let password= 'Divyashree'

let page;

(async function(){

    try{

        let browerLaunched = await puppeteer.launch({
            headless:false,  //changing the default setting to view result 
            defaultViewport:null,
            args: ['--start-maximized']
        });

        let newTab =await browerLaunched.newPage();
        await newTab.goto("https://www.hackerrank.com/auth/login");  //value is not needed so we do not store it anywhere
        await newTab.type(" input[id='input-1']" , email ,{delay : 100} )
        await newTab.type(" input[id='input-2']"  ,password , {delay : 150})
        await newTab.click("button[data-analytics='LoginPassword']" , {delay : 50})
        await waitAndClick('.topic-card a[data-attr1="algorithms"]' , newTab)
        await waitAndClick('input[value="warmup"]'  , newTab)
        let questionsArray = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay:1000})
     
        console.log("questions " + questionsArray.length);

        await questionSolver(newTab , questionsArray[0] , codeFile.answers[0])
    }
    catch(error)
    {
        console.log(error)
    }

})();


async function waitAndClick(selector , currentPage)
{
    try{
     await currentPage.waitForSelector(selector);
     await currentPage.click(selector , {delay:100})

    }
    catch(error)
    {
        console.log(error);
    }
}



async function questionSolver(page , question , solution)
{
    try
{  await  question.click();
  await waitAndClick('.monaco-editor.no-user-select .vs' , page);
  await waitAndClick(".checkbox-input" , page)
  await page.waitForSelector(" .input.text-area.custominput.auto-width")
  await page.type(".input.text-area.custominput.auto-width" , solution , {delay: 5});
  await page.keyboard.down('Control');
  await page.keyboard.press('A' ,{delay:20});
  await page.keyboard.press('X' , {delay:20});
  await page.keyboard.up('Control');
  await waitAndClick('.monaco-editor.no-user-select .vs' , page);
  await page.keyboard.down('Control');
  await page.keyboard.press('A', {delay: 10});
  await page.keyboard.press('V' , {delay : 10})
  await page.keyboard.up('Control');
  await page.click('.hr-monaco-submit' , {delay : 20})
  }
  catch(error)
  {
      console.log(error);
  }
}


