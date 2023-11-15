const express = require('express');
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(80, function() {
    console.log('Your Server is running on 80');
});

app.get('/', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/html/homepage.html"));
});
app.get('/contact', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/html/contact.html"));
});
app.get('/about', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/html/about.html"));
});
app.get('/solutionServices', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/html/solutionServices.html"));
});
app.get('/usernamePassword', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/html/usernamePassword.html"));
});

