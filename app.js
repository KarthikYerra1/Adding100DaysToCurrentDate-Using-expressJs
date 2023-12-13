const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (req, res) => {
  const date = addDays(new Date(), 100);
  const newDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  res.send(newDate);
});

app.listen(3000);

module.exports = app;
