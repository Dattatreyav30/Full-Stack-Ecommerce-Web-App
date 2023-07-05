const express = require("express");

const sequelize = require("./util/database");

const bodyParser = require("body-parser");

const cors = require("cors");

const itemRoute = require("./routes/itemRoute");
const userRoute = require("./routes/userRoute");

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
app.use("/user", userRoute);

app.listen(5000, () => {
  console.log("port running on 5000");
});

sequelize.sync().then(() => {
  console.log("Database connected successfully");
});
