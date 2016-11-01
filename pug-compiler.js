#!/usr/bin/env node
var pug = require('pug'),
    fs = require('fs'),
    path = './pug/';

function compilePug(files){
  files.map(function(file){
    var fn = pug.compileFile(path+file, {pretty: '\t'});
    var html = fn();
    fs.writeFile(file.replace('.pug', '.html'), html, 'utf8', (err) => {
      if (err) throw err;
      console.log(file+' compiled.\n');
    });
  });
}

fs.readdir(path, 'utf8', function (err, files){
  if (err) {
    return console.log(err);
  }
  compilePug(files);
});