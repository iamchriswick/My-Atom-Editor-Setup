const { writeFile } = require('fs');
const glimmerPatterns = require('./node_modules/glimmer-syntax-patterns/dist/Glimmer.tmLanguage.json');
let jsPatterns = require('./node_modules/glimmer-syntax-patterns/dist/JavaScriptExtended.tmLanguage.json');
let tsPatterns = require('./node_modules/glimmer-syntax-patterns/dist/TypeScriptExtended.tmLanguage.json');

jsPatterns.scopeName = 'source.js.extended';
tsPatterns.scopeName = 'source.ts.extended';

writeFile('grammars/Glimmer.json', JSON.stringify(glimmerPatterns, null, 2), err => {
  if (err) { return console.warn(err);}
  console.log('Glimmer complete');
});

writeFile('grammars/JavaScriptExtended.json', JSON.stringify(jsPatterns, null, 2), err => {
  if (err) { return console.warn(err);}
  console.log('JS complete');
});

writeFile('grammars/TypeScriptExtended.json', JSON.stringify(tsPatterns, null, 2), err => {
  if (err) { return console.warn(err);}
  console.log('TS complete');
});