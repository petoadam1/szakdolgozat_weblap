var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "1234",
database: "szakdoga"
});

var value;
con.connect(function(err) {
if (err) throw err;
con.query("SELECT * FROM mass_distribution", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].count);
    value = result[0].count;
});
});

var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/public', express.static('public'));

app.use(routes);
/*
app.get('', (req, res) => {
    res.render('index', {text: 'This is EJS'})
})*/

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});