const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

var userTasks = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var day = "";
  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var currentDay = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: currentDay , kindOfTask: userTasks});
});

app.post('/', function(req, res){
  newTask = req.body.task;
  userTasks.push(newTask);
  res.redirect("/");
  // res.render("list", {kindOfDay: currentDay, kindOfTask: userTask});
});

app.listen(process.env.PORT, function(){
    console.log("server started on port 3000");
});
