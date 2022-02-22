//importing http and fs modules
const http = require('http'); //To use the HTTP server and client one must require('http').
const fs = require('fs'); //The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

const hostname = '127.0.0.1';
const port = 3000;

//Now to get the requests of different pages(url's), we make their files and read them as follows-
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url); 
    url = req.url;//taking url

    res.statusCode = 200; //checking status
    res.setHeader('Content-Type', 'text/html'); //set header

    //in real application we are not going to use if-else, instead we will use node.js frameworks like express
    if(url == '/'){
        res.end(home); //showing home variable content on web page
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});
//And finally, we will make the port to listen-
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
