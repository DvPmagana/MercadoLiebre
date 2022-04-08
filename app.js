const express = require('express');
const path = require('path')


const publicFolderPath = path.resolve(__dirname,'./public');
const app = express();
app.use(express.static(publicFolderPath));


app.listen(process.env.PORT || '3000', function(){
    console.log(__dirname)
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});