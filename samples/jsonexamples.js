const {convertObjectToJSON,convertCSVToObject} = require("../lib");

const jsonTxt = convertObjectToJSON({fname: "ofir", lname: "elarat"});
console.log(jsonTxt);

const csvObj = convertCSVToObject(`fname,lname
ofir, elarat
fisrtname, lastname`);

console.log(csvObj)