//required modules http and file system
const http = require('http');
const fs = require('fs');

//Now we will write the line of code to read a file as follows-
const fileContent = fs.readFileSync('mathObject.html');

//The final step is to make the server and serve the file.
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'}); 
    res.end(fileContent);
});
// Till now we have made the server and now we will make this server listen on its port. 
// Suppose we want to make it listen to port 80, so the code for this goes as follows-
server.listen(80, '127.0.0.1', () => {
    console.log('Listening on port 80');
  });

