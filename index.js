require("dotenv").config();
const express = require('express');
const app = express()
const multer = require("multer")
const upload = multer()

const bodyParser = require("body-parser")

//de parse application/json
app.use(bodyParser.json())

//de parse application/xwww-
app.use(bodyParser.urlencoded({extended: true}))

//de parse multipart/form-data
app.use(upload.array())

app.use(express.static('public'))

app.set('view engine', 'pug')

app.set('views', './views')

app.get("/", function(request, response){
    response.render("form")
})

app.post("/", function(request, response){
    console.log(request.body)
    response.send("received your request")
})

app.get('/', function(request, response){
    response.render("index")
})

app.get('/', function(request, response){
    response.render("staticFile")
})

app.get('/aboutme',function(request, response){
    response.render("aboutme", {
        name: "About My",
        url: "http://www.tutorialspoint.com"
    })
})
app.get("/dairy",function(req,res){
    res.sendFile(__dirname+"/dairy.html");
})
app.get('/contactme/myemail', function(request, response){
    response.send("my email is tramypham2192@SpeechGrammarList.com")
})

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received")
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

app.listen(process.env.PORT||3000,()=>{
    console.log("Server Running ")
})
