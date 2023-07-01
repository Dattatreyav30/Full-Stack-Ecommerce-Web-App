const express = require("express");

const sequelize = require("./util/database");

const itemRoute = require("./routes/itemRoute"); 

const bodyParser = require("body-parser");

const cors = require('cors')

const app = express();

app.use(cors());

app.use(itemRoute);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


sequelize.sync((res) => {
  console.log("Database connected successfully");
});

app.listen(5000, () => {
  console.log("port running on 5000");
});
