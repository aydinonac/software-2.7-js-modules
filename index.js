// Setup the package.json and install dependency "convert-excel-to-json" via npm install as a node module. 
import random from "convert-excel-to-json";
import fs from 'fs';
 
const result = random({
    source: fs.readFileSync('./data.xlsx') // fs.readFileSync return a Buffer
});

console.log(result);