//jshint esversion:6

//requring packages 
const express = require("express");
const bodyParser = require("body-parser");

var items = ["Buy Food", "Cook Food", "Eat Food"];

//creating constant using express()
const app = express();
app.set('view engine', 'ejs'); //use ejs as its view engine, it has to place below the new app const

app.use(bodyParser.urlencoded({extended: true})); //using bodyParser

//create get route that sends the browser text, when user tris access the home route
app.get("/", function(req, res){

    var today = new Date();
    
    var options ={ weekday: 'long', year:'numeric', month:'long', day:'numeric'};

    var day = today.toLocaleDateString("en-GB", options);

    res.render("list", {KindOfDay: day, newListItems: items});
});

//handle post request form index.html, / means home route which is app.js
app.post("/",function(req, res){

    //we need to use body parser inorder to use value of body
    var item = req.body.newItem; //newItem is name of input type in index.html
    
    items.push(item); //pusing item in array list
    res.redirect("/") // redirect to home route 
});

//listen in port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});