const yargs = require("yargs");
const fs = require("fs");

const {convertJSONToObject, convertObjectToJSON} = require("./JSON-converter");
const {convetYAMLToObject, convertObjectToYAML} = require("./YAML-converter");

const options = yargs
 .usage("Usage: -i <input-file> -it <input-type> -o <output-file> -ot <output-type>")
 .option("i",{ alias: "inputFile", describe: "input file path", type: "string", demandOption: true })
 .option("it",{ alias: "inputType", describe: "input file type: JSON/YAML/XML..", type: "string", demandOption: true })
 .option("o",{ alias: "outputFile", describe: "output file path", type: "string", demandOption: false })
 .option("ot",{ alias: "outputType", describe: "output file type: JSON/YAML/XML..", type: "string", demandOption: true })
 .argv;


console.log(`input file path: ${options.inputFile}`);
const textData = fs.readFileSync(options.inputFile, "utf8");

let inputObj = null;
let outputText = "";

console.log(`input type: ${options.inputType}`);
switch(options.inputType){
    case "JSON":
        inputObj = convertJSONToObject(textData);
        break;
    case "YAML":
        inputObj = convetYAMLToObject(textData);
        break;
    default: 
        console.log("cannot parse input type");
}

console.log(`output type: ${options.outputType}`);
switch(options.outputType){
    case "JSON":
        outputText = convertObjectToJSON(inputObj);
        break;
    case "YAML":
        outputText = convertObjectToYAML(inputObj);
        break;
    default: 
        console.log("cannot parse output type");
}

console.log(outputText);
