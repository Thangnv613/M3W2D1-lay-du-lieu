let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

http.createServer((req,res)=>{
    let decoder = new StringDecoder('utf-8');
    let buffer ='';
    req.on('data', function(data){
      buffer += decoder.write(data);  
    })
    req.on('end', function(end){
        buffer += end;
    res.end('Hello Anh Thang');
    console.log(buffer);

    });

   
}).listen(3000,()=>{
    console.log('listening on port 3000!');
})
