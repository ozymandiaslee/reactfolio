const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  res.sendFile(path.join(__dirname, "./client/build/"));
};

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
