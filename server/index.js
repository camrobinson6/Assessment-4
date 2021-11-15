const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

 
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A fresh start will put you on your way.",
					 "A friend is a present you give yourself.",
					 "A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you.",
           "A soft voice may be awfully persuasive.",
  ];

  let randomIndex2 = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex2];

  res.status(200).send(randomFortune);

});

app.post('/api/encouragement', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message}, ${meaning}`);
})

app.post('/api/inspiration', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message},${meaning}`);
})

app.post('/api/help', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message}, ${meaning}`);
})

app.delete('/api/help/:message', (req, res) => {
   res.status(200).send(`Message deleted! You can refresh now.`);
})

app.get('/api/helpInput/', (req, res) => {
  let {paramInput2} = req.body;
  res.status(200).send(`You spoke it into existance. Great job. ${paramInput2}`);
})


app.listen(4000, () => console.log("Server running on 4000"));
