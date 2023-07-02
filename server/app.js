const express = require("express");

const sequelize = require("./util/database");

const itemRoute = require("./routes/itemRoute");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(itemRoute);

app.listen(5000, () => {
  console.log("port running on 5000");
});

sequelize.sync().then(() => {
  console.log("Database connected successfully");
});
