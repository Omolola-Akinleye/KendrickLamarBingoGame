var express= require('express');
//var fs = require('fs');
var app= express();

var port = process.env.PORT || 2222;

app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
  console.log("Serving is running" + port);
});
