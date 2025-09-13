const fs = require('fs');
// Async data
fs.readFile('../HTTP_Module/website.js',function(err,data){
    if(err){
        console.error('error',err);
    }
    console.log('data Async:',data.toString());
})
// Sync Data
const result = fs.readFileSync('../execute.js');
console.log('data Sync:', result.toString());