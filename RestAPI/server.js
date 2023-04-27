const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/item.routes")(app);

const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to LaanLokalt api" });
});

const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(
  app.listen(PORT,  ()=> {
    console.log(`Server is running on port ${PORT}`)
  })
);