#!/usr/bin/env node
var pug = require('pug'),
    fs = require('fs'),
    argv = require('minimist')(process.argv.slice(2)),
    baseInput = argv._[0] || './pug',
    baseOutput = argv.o || './html',
    isRecursive = (argv.R) ? true : false;

function compilePug (file, input, output) {
  var fn = pug.compileFile(input+'/'+file, {pretty: '\t'});
  var html = fn();
  fs.writeFile(output+'/'+file.replace('.pug', '.html'), html, 'utf8', (err) => {
    if (err) return console.log(err);
    console.log(output+'/'+file+' compiled.\n');
  });
}

function readpath (input = baseInput, output = baseOutput) {
  console.log('input:', input, 'output:', output);
  fs.readdir(input, 'utf8', function (err, files){
    if (err) return console.log(err);
    console.log(files);
    fs.mkdir(output, (err) => {
      if (err && err.code != 'EEXIST') return console.log(err);
      files.map((file) => {
        fs.lstat(input+'/'+file, (err, stats) => {
          if (err) return console.log(err);
          if (stats.isFile()) { compilePug(file, input, output); }
          if (stats.isDirectory() && isRecursive) { readpath(input+'/'+file, output+'/'+file); }
        });
      });
    });
  });
}

readpath(baseInput);