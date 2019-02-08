var express = require("express");
var app = express();
var mainctrl = require("./controllers/mainctrl");

app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",mainctrl.showIndex);
app.get("/:number",mainctrl.showResult);

app.listen(3001);