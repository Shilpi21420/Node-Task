const http = require("http");

// function rqListener(req,res){


// }
// http.createServer(rqListener);

//or

// http.createServer(function(req,res){

// });

//or

const server = http.createServer((req,res)=>{
res.end("My name is Shilpi Kumari");
console.log("Shilpi kumari");
});

server.listen(4000, "127.0.0.1", () =>{
    console.log("Listening to the port 4000");
});
