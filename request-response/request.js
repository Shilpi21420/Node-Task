const http = require("http");
const data = require("./data");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-Type": "applicationJson" });
    resp.write(JSON.stringify(data));
    resp.write("Hello, My name is Shilpi");

    resp.end();
  })
  .listen(5000);

const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2],input[3])

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

for( i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt",'a simplefiles');
}
fs.readdir(dirPath , (er, fil)=>{
    fil.forEach((i)=>{
        console.log(i);

    })

})

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath, "This is a simple text files");
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,'and file name is apple',(err)=>{
//     if(!err)
//     console.log("File is updaed");
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     console.log("Updated");
// })
fs.unlinkSync(`${dirPath}/fruit.txt`);

///Express JS

const express = require('express');
const app = express();
app.get('',(req,resp)=>{
    resp.send('Helllo , This is Home Page');
})
app.get('/about',(req,resp)=>{
    resp.send('Helllo This is About Page');
})

app.listen(5000)

const express = require('express');
const app = express();
app.get('',(req,resp)=>{
    resp.send(`<h1>Helllo , This is Home Page<h1>`);
})
app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="username" />
    `);
})

app.listen(5000)

const express = require('express')
const path = require('path')
const app = express();
const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath));
app.listen(5000);

const express = require('express')
const path = require('path')
const app = express();
const publicpath = path.join(__dirname,'public');
app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
})

app.listen(5000);

const express = require('express');
const path = require('path');
const app = express();
const publicPath= path.join(__dirname,'public');
app.set('view engine','ejs')
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/home',(_,resp)=>{
    const user ={
        name:'Shilpi',
        age:24,
        email:"S@gmail.com"
    }
    resp.render('home',{user})
});
app.listen(5000);

const express = require("express");
const app = express();
const reqFile = (req, resp, next) => {
    if(!req.query.age){
        resp.send("Please enter your age")
    }
    else if(req.query.age<18){
        resp.send("You can not acces");
    }
    else{
        next();
    }
};
app.use(reqFile);
app.get('/',(req,ressp)=>{
    resp.send('welcome to the home page')
})

app.get('/users',(req,resp)=>{
    resp.send('welcome to the user page')
})
app.listen(5000)
