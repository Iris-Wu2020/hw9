// Load the Express and Multer package as a module
const express = require("express");
const multer = require("multer");

// Access the exported service
const app = express();
const upload = multer();


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
  

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
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


// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
