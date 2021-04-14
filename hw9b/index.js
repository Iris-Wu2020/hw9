// Load the Express and Multer package as a module
const { response, request } = require("express");
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser")

// Access the exported service
const app = express();
const upload = multer();
const jsonParser = bodyParser.json();


app.use(express.static("public"));
app.use(express.static("css"));

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const countries = {
    name: "Iris",
    countries: [
        {
            name: "UK",
            year: 2017
        },
        {
            name: "USA",
            year: 2019
        }
    ]
};

app.get("/api/countries", (request, response) => {
    response.json(countries);
});

app.post("/api/countries", jsonParser, (request, response) => {
    const countries = request.body;
    response.send(`You sent me a list of countries: ${JSON.stringify(countries)}`);

});

const articles = [
    { id: 1, title: "First article", content: "Hello World!" },
    {
        id: 2,
        title: "Lorem ipsum",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
    },
    {
        id: 3,
        title: "Lorem ipsum in French",
        content:
            "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
    }
];

// Return the articles list in JSON format
app.get("/api/articles", (request, response) => {
    response.json(articles);
});

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});




app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1", upload.array(), (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, thank you for your order. We will keep you posted on delivery status at ${email}`);
});

app.get("/ex3", (request, response) => {
    response.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/ex3", upload.array(), (request, response) => {
    console.log(request.body);
    const title = request.body.title;
    const content = request.body.content;
    response.send(`New article added successfully with title ${title} and ID `);
});