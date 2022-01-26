const express = require("express");
const app = express();
app.get("/greetings", (req, response) => {
  response.send("Hio!");
});
app.listen(3000, () => {});
