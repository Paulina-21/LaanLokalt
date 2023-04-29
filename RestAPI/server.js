const express = require("express");
const cors = require("cors");
const session = require('express-session'); // added by Mark
const bodyParser = require('body-parser');

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(bodyParser.json()); // added by mark

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// about sessions - added by Mark
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/item.routes")(app);
require("./app/routes/user.routes")(app); // added by Mark

const db = require("./app/models");

// simple route
/* app.get("/", (req, res) => {
  res.json({ message: "Welcome to LaanLokalt api" });
}); */
app.get('/', (req, res) => {
  const username = req.session.username;
  res.send(`Session data retrieved: ${username}`);
});

const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
);
