import newfile from "fs";

newfile.writeFileSync("NewFile.txt","Hello World!");

console.log("The message is in NewFile");