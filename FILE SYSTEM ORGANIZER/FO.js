//we are building a command line project 

//how can we give command on cmd
//FILE SYSTEM ORGANIZER //
//Features of the project-
//If you have numerous file in a folder and they are not properly arranged
//So you can this tool to arrange them in specific directory according to their extension  
//like text files will go into text file folder  , .exe file will go into appliaction folder 
//so at he end you will have a arranged set of files in specific folders

//in js input is given in the format of array process.argv


// let input=process.argv[2];  //process.argv it treat each word as a indexed element any string or integer
//it treat command as array , it just print output  -argv:argument vector

let inputArr = process.argv.slice(2); // to take multiple iput we use slice it remoeves input before 2 index

let types = {   //it is a object
    devFiles:["htm" ,"html", "css" , "js"],
    Images:["avif","gif","jpg","jpeg", "jfif","pjpeg","pjp","png","JPG"],
    Music: ["mp3"],
    Videos:["mp4", "MOV" ,"WMV" ,"AVI" ,"AVCHD","FLV","MKW","MPEG-2"],
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

const { dir } = require("console");
const fs = require("fs")  //importin fs module
const path = require('path');  //importing path module
const { dirname } = require("path/posix");
//console.log(input)  

let command = inputArr[0];  ///tree , help ,organize

switch (command) {
    case 'tree':
        // console.log('tree implemented')
        treeFn(inputArr[1])
        break;

    case 'help':
        // console.log('help implemeted')
        helpfn()
        break;

    case 'organize':
        // console.log('organize command')
        organizeFn(inputArr[1]);               //input to be given as node .\FO.js organize 'C:\DEV\test folder'
        break;

    default:
        console.log('give correct input')   // if no command is given or incorrect command is given
        break;
}

function helpfn() {
    console.log(`List of all Commmand-
                1)Tree command- node .\FO.js tree <dirName>

                2)Organize command- node .\FO.js  organize <dirName>

                3)Help command- node .\FO.js help
    `)
}

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

            sendFiles(childAddress, dest ,fileCategory)
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
 function sendFiles(srcFilePath , dest , fileCategory)
 {
     let catPath= path.join(dest , fileCategory)   //making file cataegory path
     if(fs.existsSync(catPath)==false)   //checking for cataegory folder path exist or not
        {
            fs.mkdirSync(catPath)
        }

      let fileName= path.basename(srcFilePath);   // we took out names of the files
      let destFilePath=  path.join(catPath, fileName); //created path for files in cataegory folder

      fs.copyFileSync(srcFilePath, destFilePath)   //copied the files
      fs.unlinkSync(srcFilePath)  //deleted the files

      console.log(fileName +" is copeid to " +fileCategory)
 }

//tree implementation

function treeFn(dirPath)
{
    if(dirPath==undefined)
    {
        console.log('Please enter a valid directory path');
        return;
    }
    else{
        let doesExist= fs.existsSync(dirPath);
        if(doesExist==true)
        {
            treeHelper(dirPath," ");
        }
     }
  }

function treeHelper(targetPath , indent)
{
        let isFile= fs.lstatSync(targetPath).isFile();

        if(isFile==true)
        {
        let fileName= path.basename(targetPath);
        console.log(indent+" ├── "+fileName)
        }
        else
        {
            let dirname= path.basename(targetPath)
            console.log(indent+"└──"+dirname)

            let children= fs.readdirSync(targetPath)
            // console.log(children)
            //here we took out all the children of the folder

            for(let i=0;i<children.length;i++)
            {
                let childPath= path.join(targetPath , children[i])
                // console.log(childPath);
                 treeHelper(childPath , indent+ "\t")

            }
        }
}

