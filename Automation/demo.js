let puppeteer = require('puppeteer')

console.log('before')
let browerLaunchingPromise = puppeteer.launch({
    headless:false,  //changing the default setting to view result 
    rgs: ['--start-fullscreen' , '--start-maximized']
});

browerLaunchingPromise.then(function(browserInstance)
{
    let newTab=browserInstance.newPage();
        return newTab;
}).then(function(newTab)
{
    console.log('new TAB opened')
        let pageOpenPromise = newTab.goto("https://nados.io/community");
        return pageOpenPromise;
}).then(function()
{
    console.log('website opened')
})

console.log('after')