const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static')); //'/static' is url and 'static' is a folder name


// Set the template engine as pug
app.set('view engine', 'pug'); //processes template, information provided by us given back as a template

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
 
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Jay', message: 'Hello there and thanks for telling me how to use pug!' })
});

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Jay");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Jay");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});