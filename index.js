var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var app = express()
var buf = fs.readFileSync('index.html')
var indexfile2 = buf.toString(indexfile2, "utf-8")

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res) {
  var post_data = req.body;
  console.log(post_data);
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
