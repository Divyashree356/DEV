let puppeteer = require('puppeteer')
let email='neheba3007@zneep.com';
let password= 'Divyashree'

let page;

console.log('before')
let browerLaunchingPromise = puppeteer.launch({
    headless:false,  //changing the default setting to view result 
    defaultViewport:null,
    rgs: ['--start-maximized']
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
//    return algoSectionClickedPromise;
});


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


console.log('after')