//os is node module - used to check system specification for any projecct or game

const os= require('os');

//some functions of os modeule -
console.log(os.arch()) //architecture 32 or 64
console.log(os.platform())//tell us about platform
console.log(os.networkInterfaces()) // about network details
console.log(os.cpus()) // cpu details/specifications