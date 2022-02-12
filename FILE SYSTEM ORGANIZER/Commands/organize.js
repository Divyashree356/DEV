const fs= require('fs');
const path = require('path')

let types = {   //it is a object
    devFiles: ["htm", "html", "css", "js"],
    Images: ["avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "JPG"],
    Music: ["mp3"],
    Videos: ["mp4", "MOV", "WMV", "AVI", "AVCHD", "FLV", "MKW", "MPEG-2"],
    archives: ["zip", "7z", "rar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};

function organizeFn(dirPath) {
    let destPath;    //globally declaring a destination path
    //input of directory path
    if (dirPath == undefined) {
        console.log('Please enter a valid Directory path ');  //checking wether the path is passed or not
        return;
        // console.log(dirPath)  
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        //  console.log(doesExist)
        //wether the path is valid or not and it exist or not


        if (doesExist == true) {
            destPath = path.join(dirPath, 'organized_files');

            // C:\DEV\test folder -this is dir path we join organized_files using join function of path module
            //new path for folder -C:\DEV\test folder\organized_files

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);  //making folder if folder does not exist

            }
            else {
                console.log('This folder Already Exist')  // folder already existing 
            }
        }
        else {
            console.log('Enter valid path');
        }
    }
    organizeHelper(dirPath, destPath);
}

//we are organizing this function to cataegorize our files
function organizeHelper(src, dest)  //take source and destination 
{
    let childNames = fs.readdirSync(src);
    // console.log(childNames) 
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i])  //path is identify of the files
        let isFile = fs.lstatSync(childAddress).isFile(); //check here to only identify the files

        // console.log(childAddress +" "+ isFile) 

        if (isFile == true) {
            let fileCategory = getCataegory(childNames[i])   //we took out all the cataegories of the files
            // console.log(childNames[i] +" belongs to " +fileCategory)

            sendFiles(childAddress, dest, fileCategory)
        }
    }
}

function getCataegory(name) {
    let ext = path.extname(name);   //taking out the extension of the files
    // console.log(ext) 
    ext = ext.slice(1) //removing dot from extension
    // console.log(ext)

    for (let type in types) {
        let cTypeArr = types[type];
        // console.log(cTypeArr)

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i])
            //match the values with the extensions
            {
                return type;
            }
        }
    }
    return 'others'
}
function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)   //making file cataegory path
    if (fs.existsSync(catPath) == false)   //checking for cataegory folder path exist or not
    {
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath);   // we took out names of the files
    let destFilePath = path.join(catPath, fileName); //created path for files in cataegory folder

    fs.copyFileSync(srcFilePath, destFilePath)   //copied the files
    fs.unlinkSync(srcFilePath)  //deleted the files

    console.log(fileName + " is copeid to " + fileCategory)
}

module.exports={
    organizeKey:organizeFn
}