let puppeteer = require('puppeteer')

console.log('before')
let browerLaunchingPromise = puppeteer.launch({
    headless:false  //changing the default setting to view result 
});

browerLaunchingPromise.then(function(browserInstance)
{
        return browserInstance;
})

console.log('after')