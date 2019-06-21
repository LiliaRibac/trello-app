const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

var path = require("path")
var public = path.join(__dirname, 'public');

const swimlanes = [{
        id: 1,
        title: "first swimlane",
        cards: [
            {
            id: 1,
            title: 'first card',
            // other data below

        },
        {
            id: 2,
            title: 'second card',
            // other data below

        }
    ]
    },
    {
        id: 2,
        title: "second swimlane",
        cards: [{
            id: 1,
            title: 'first card',
            // other data below
        }]
    }
]

// TODO: create id gen

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(path.join(public, 'index.html'));
});


app.get("/api/swimlanes", (req, res) => {
    res.send(swimlanes)
})

// NOTE: The curly brackets create a "variable" whose value comes from the URL
// 		 The variable can be accessed as a member of req.params using the same name
app.get("/api/swimlanes/:id", (req, res) => {

    let swimlane;

    for (let i = 0; i < swimlanes.length; i++) {
        if (swimlanes[i].id == req.params.id) {
            swimlane = swimlanes[i];
        }
    }

    res.send(swimlane)
});



//get cards
app.get("/api/cards", (req, res) => {
    // TODO: Send EVERY swimlane's cards
    let allCards = [];
    for (let i = 0; i < swimlanes.length; i++) {
        allCards.push(swimlanes[i].cards);
    }
    res.send(allCards);
})


app.get("/api/cards/:id", (req, res) => {
    // TODO: Send the card whose id is req.params.id
    let card;

    // FOR EACH CARD (in the first swimlane)
    for (let i = 0; i < swimlanes[0].cards.length; i++) {
        if (swimlanes[0].cards[i].id == req.params.id) {
            card = swimlanes[0].cards[i];
        }
    }

    res.send(card)
})


app.post('/api/swimlanes', (req, res) => {
    let data = req.body;
    console.log('adding swimlane')
    console.log(data)
    swimlanes.push({
        ...data,
        id: swimlanes.length + 1,
        cards: []
    });
    res.send(200)
})

app.post('/api/swimlanes/:id/cards', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    console.log(swimlanes)
    // find the swimlane by id in the swimlanes array
    // useing the req.params.id

    // push the new card data 
    // swimlane.cards.push(data)
})



app.listen(3000, () => console.log('Listening on port 3000...'))