const fs = require('fs');
const http = require('http');

// Async data
// fs.readFile('../HTTP_Module/website.js',function(err,data){
//     if(err){
//         console.error('error',err);
//     }
//     console.log('data Async:',data.toString());
// })
// // Sync Data
// const result = fs.readFileSync('../execute.js');
// console.log('data Sync:', result.toString());

http.createServer(function(err,res){

    fs.readFile('../Demo.txt',function(err,data){
        if(err){
            console.err('err',err)
        }
        console.log('Asyncdata',data.toString())
        res.write(data);
        res.end();
    })
}).listen(8080);