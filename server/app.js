require("dotenv").config();
const express = require("express");
const app = express();
const ImageKit = require("imagekit");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const imagekit = new ImageKit({
  urlEndpoint: process.env.URL_ENDPOINT,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

// allow cross-origin requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/auth", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  console.log(result);
  res.send(result);
});

let arr = [];
app.post("/saveFile", (req, res) => {
  arr.push(req.body.address); //save image's path
  res.send("saved!");
});

app.listen(PORT, () => {
  console.log("Live at Port 3001");
});
