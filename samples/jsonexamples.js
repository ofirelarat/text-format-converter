const {convertObjectToJSON,convertCSVToObject, convertTextToBase64} = require("../lib");

const jsonTxt = convertObjectToJSON({fname: "ofir", lname: "elarat"});
console.log(jsonTxt);

const csvObj = convertCSVToObject(`fname,lname
ofir, elarat
fisrtname, lastname`);
console.log(csvObj)

console.log(convertTextToBase64("Hi this is Ofir"))