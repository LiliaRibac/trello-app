const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var path = require("path")
var public = path.join(__dirname, 'public');
var cards =[];
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});


app.get ("/api/cards",(req,res) =>{
    res.send(cards)
})

// /api/courses/1
app.get('/api/courses/:id', (req,res) =>{
    res.send(req.params.id)
})

app.post('/api/save', (req,res) =>{
    var data = req.body;
    res.send(200)
    console.log(data)
})

app.post('/api/addSwimlane',(req, res)=>{
    let data = req.body 
    cards+= data;
    res.send(200)
})



app.listen(3000,() => console.log('Listening on port 3000...'))