let puppeteer = require('puppeteer');
const { answers } = require('./code');
let codeFile = require('./code')
let email='neheba3007@zneep.com';
let password= 'Divyashree'

let page;

console.log('before')
let browerLaunchingPromise = puppeteer.launch({
    headless:false,  //changing the default setting to view result 
    defaultViewport:null,
    args: ['--start-maximized']
});

browerLaunchingPromise.then(function(browserInstance)
{
    let newTab=browserInstance.newPage();
        return newTab;
}).then(function(newTab)
{
    console.log('new TAB opened')
        page=newTab;
        let pageOpenPromise = newTab.goto("https://www.hackerrank.com/auth/login");
        return pageOpenPromise;
}).then(function()
{

    let typeEmailPromise = page.type(" input[id='input-1']" , email ,{delay : 100} )
    return typeEmailPromise;

    // console.log('website opened')
}).then(function()
{
    let typePasswordPromise = page.type(" input[id='input-2']"  ,password , {delay : 150})
        return typePasswordPromise;
}).then(function()
{
    let loginpromise =page.click("button[data-analytics='LoginPassword']" , {delay : 50})
    return loginpromise
})
.then(function()
{
   let algoSectionClickedPromise= waitAndClick('.topic-card a[data-attr1="algorithms"]' , page)
   return algoSectionClickedPromise;
}).then(function()
{
    let warmUpPageClicked= waitAndClick('input[value="warmup"]'  , page)
    return warmUpPageClicked;
}).then(function()
{
    let questionsArray = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay:1000})
    return questionsArray;
}).then(function(questionsArray)
{
    console.log("questions " + questionsArray.length);
    let questionSolvedPromise = questionSolver(page , questionsArray[0] , codeFile.answers[0])
    return questionSolvedPromise;
})



function waitAndClick(selector , currentPage)
{
    return new Promise(function(resolve , reject)
    {
        let waitForPromise = currentPage.waitForSelector(selector);
        waitForPromise.then(function()
        {
            let clickCurrPagePromise = currentPage.click(selector , {delay:100})
            return clickCurrPagePromise;
        }).then(function()
        {
            resolve();
        }).catch(function()
        {
            reject();
        })
    })
}

function questionSolver(page , question , solution)
{
    return new Promise(function(resolve , reject)
    {
        let questionClicked= question.click();
        questionClicked.then(function()
        {
            let editorReachedPromise = waitAndClick('.monaco-editor.no-user-select .vs' , page);
            return editorReachedPromise;
        }).then(function(){
          return waitAndClick(".checkbox-input" , page)
        }).then(function()
        {
         return page.waitForSelector(" .input.text-area.custominput.auto-width")
        }).then(function(){
            return page.type(".input.text-area.custominput.auto-width" , solution , {delay: 5});
        }).then(function()
        {
        //   console.log('Answer typed')
          let controlPressedPromise = page.keyboard.down('Control');
          return controlPressedPromise;
        }).then(function()
        {
            let aIsPressed = page.keyboard.press('A' ,{delay:20});
            return aIsPressed;
        })
        .then(function()
        {
            let xIsPressed = page.keyboard.press('X' , {delay:20});
            return xIsPressed;
        }).then(function()
        {
            let controlReleased = page.keyboard.up('Control');
            return controlReleased;
        }).then(function()
        {
            let editorReachedPromise = waitAndClick('.monaco-editor.no-user-select .vs' , page);
            return editorReachedPromise;
        }).then(function()
        {
          let controlAgainPressedPromise = page.keyboard.down('Control');
          return controlAgainPressedPromise;
        }).then(function()
        {
            let aIsAgainPressed = page.keyboard.press('A', {delay: 10})
            return aIsAgainPressed;
        }).then(function()
        {
            let vIsPressed = page.keyboard.press('V' , {delay : 10})
            return vIsPressed;
        }).then(function()
        {
            let controlReleasedAgain = page.keyboard.up('Control');
            return controlReleasedAgain;
        }).then(function()
        {
          let submitClickedPromise=  page.click('.hr-monaco-submit' , {delay : 20})
            return submitClickedPromise;
        }).then(function()
        {
            resolve();
        }).catch(function(err)
        {
            console.log(err);
        })

    })
}


console.log('after')