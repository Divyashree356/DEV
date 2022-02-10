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

//console.log(input)  

let command=inputArr[0];  ///tree , help ,organize

switch(command)
{
    case 'tree':
        console.log('tree implemented')
        break;

    case 'help':
        // console.log('help implemeted')
        helpfn()
        break;

    case 'organize':
        console.log('organize command')
        break;

    default:
        console.log('give correct input')   // if no command is given or incorrect command is given
        break;
}

function helpfn()
{
    console.log(`List of all Commmand-
                1)Tree command- node .\FO.js tree <dirName>

                2)Organize command- node .\FO.js  organize <dirName>

                3)Help command- node .\FO.js help
    `)
}