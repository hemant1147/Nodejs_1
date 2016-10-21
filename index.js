var express=require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/api/get/',function(request,response){

  response.write("<h1> Your email id is  "+request.query.email+" "+"</h1>");
  response.send();
});

var port = process.env.PORT || 8111;

var server=app.listen(port,function(req,res){
    console.log("Server started at port "+port);
});