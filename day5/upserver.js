const http = require("http");
const server = http.createServer((req,res) => {
const url=req.url;
if( url === "/"){
    res.setHeader("Content-Type","text/html")
    res.write("<html>")
    res.write(`<body><form method="POST" action="/message"><input type="text" name="msg"></input><button type="submit">submit</button></form></body>`)
    res.write("</html>")
    return res.end;
} 
    res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write(`<body><h1>Hello this Message is from Node.js</h1></body>`);
        res.write("</html>");
        return res.end();
    })

server.listen(5000,()=>{
    console.log("Server is started on port 5000");
})