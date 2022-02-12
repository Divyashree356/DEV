const fs= require('fs');
const path=  require('path')

//tree implementation

function treeFn(dirPath) {
    if (dirPath == undefined) {
        console.log('Please enter a valid directory path');
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist == true) {
            treeHelper(dirPath, " ");
        }
    }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();
    //here we check wether the target file is a file or a folder

    if (isFile == true) {
        let fileName = path.basename(targetPath);
        console.log(indent + " ├── " + fileName)
        //this will display the files
    }
    else {
        let dirname = path.basename(targetPath)
        console.log(indent + "└──" + dirname)
        //this will display the folders


        let children = fs.readdirSync(targetPath)
        // console.log(children)
        //here we took out all the children of the folder

        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(targetPath, children[i])
            // console.log(childPath);
            treeHelper(childPath, indent + "\t")
            //using recursion yo repeat the process for all files and folders

        }
    }
}

module.exports={
    treeKey:treeFn
}