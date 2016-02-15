var fs = require('fs')

var input = "./checks.raw";
var output = "./checks.json";

var array = fs.readFileSync(input).toString().split("\n");
var processed = JSON.stringify(array,null,4)

fs.wriXSteFileSync(output,processed);


