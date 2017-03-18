"use strict";


var path = require("path");
var formidable = require('formidable');

module.exports = function(app){
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../views", "index.html"));
    });
    
    app.post('/upload', function(req, res){
        var form = new formidable.IncomingForm();
        var size;
    
        form.parse(req);
    
        form.on('fileBegin', function (name, file){
            file.path = path.join(__dirname + '/uploads/') + file.name;
        });
    
        form.on('file', function (name, file, next){
            console.log('Uploaded ' + file.name);
            (function(){
                res.json({"filesize" : file.size});
            })();
        });
        
    });
}