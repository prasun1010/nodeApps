var express = require('express');
var app = express();
var port=process.env.PORT || 8080;//Set the environmental variable for live port

app.get('/',function(req,res){
    //res.send('Hello World');
    res.send('Mount path of the url is:'+app.mountpath);
    
})
app.get('/about',function(req,res){
   // res.send('This is the About us');
    res.send('Mount path of the url is:'+app.mountpath);
    
})
app.get('/user/:id',function(req,res){
    //res.send('This is the About us');
    var id=req.params.id;
    console.log('The userid is:'+id);
    res.send(id);
    res.send('Mount path of the url is:'+app.mountpath);
})
app.listen(port);
console.log('Server is running at the port:'+port);

