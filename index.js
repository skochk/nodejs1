const http = require('http');
const fs = require('fs');
// const path = require('path');
var htmlFile;
var mainCss;
var page2;
var page3;
var page404;

const server = http.createServer((req, res)=>{

    fs.readFile('./public/index.html','utf-8', function(err, pizdec){
        if(err) throw err;
        htmlFile = pizdec;
    });
    fs.readFile('./public/page3.html','utf-8', function(err, data){
        page3 = data;
    });
    fs.readFile('./public/page2.html','utf-8', function(err, data){
        if(err) throw err;
        page2 = data;
    });
    fs.readFile('./public/main.css','utf-8', function(err, neponyatno){
        mainCss = neponyatno;
    });
    fs.readFile('./public/404.html','utf-8', function(err, data){
        page404 = data;
    });
    console.log('check does work two fs.readfile');
    switch(req.url){
        case '/main.css':
                res.writeHead(200, {"Content-Type":"text/css"});
                res.end(mainCss);
                break;
        case '/page2.html':
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(page2);  
        case '/':
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(htmlFile);
        case '/page3.html':
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(page3);
        case '/index.html':
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(htmlFile);                
        default:
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(page404);
                        
    }
    res.end();  



// bilo na uroke    
    
    //     res.writeHead(200, {"Content-Type":"text/html"})
    //     fs.readFile(__dirname + '/public/index.html' + req.url, 'utf-8', (err, data)=>{
    //         res.end(data);

    //     })
    // } else{
    //     res.writeHead(200, {"Content-Type":"text/html"})
    //     fs.readFile(__dirname + '/public/' + req.url, 'utf-8', (err, data)=>{
    //         res.end(data);

    //     })
    // }
        

    
    // if(req.url ==="/"){  
    //     fs.readFile(__dirname + '/public/index.html', 'utf-8',(err, data)=>{
    //     res.end(data);   
    // });
    // }else if( req.url ==='/pig'){
    //     res.writeHead(200, {"Content-Type":"text/html"})
    //     res.end('<h1>PIG dance</h2> <img src="https://media1.tenor.com/images/d42d8a76cb7df3e21bae926a48e20dec/tenor.gif?itemid=5221459">');
    // } else {
    //     res.writeHead(200, {"Content-Type":"text/html"})
    //     res.end('<h1>uhadi 404</h1><img src="https://cs6.pikabu.ru/images/big_size_comm/2014-12_5/14195184557828.jpg">');
    // }
})  

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log('Server succesfully started, listening on 3000 port');  
})
