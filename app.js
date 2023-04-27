const express = require("express");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const url =
  "mongodb+srv://prayag:PRAYAG@cluster0.mdccwq0.mongodb.net/Exam2?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const routes = require("./router/routes");

app.use(bodyParser.json({ limit: "1mb" }));
app.use(routes);

app.use("/", (req, res) => {
  // console.log("home page");
  res.render("createCustomer");
});

mongoose
  .connect(url)
  .then(() => {
    app.listen(3000, () => {
      console.log("the server is running");
    });
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });
