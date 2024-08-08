const { CohereClient } = require('cohere-ai');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: "*",
    credentials: true
}

app.use(cors(corsOptions));

const cohere = new CohereClient({
  token: process.env.COHERE_TOKEN,
});

app.post("/chat", (req, res) => {
    const message = req.body.message;

    (async () => {
        const response = await cohere.chat({
            message: message,
        });
        
        res.send(response.text);
    })();
})

app.listen(3008, () => {
    console.log(`Servidor online`);
});