#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");

const {convertJSONToObject, convertObjectToJSON} = require("./converters/JSON-converter");
const {convetYAMLToObject, convertObjectToYAML} = require("./converters/YAML-converter");
const {convetXMLToObject, convertObjectToXML} = require("./converters/XML-converter");
const {convertCSVToObject, convertObjectToCSV} = require("./converters/CSV-converter");

const options = yargs
 .usage("Usage: -i <input-file> -it <input-type> -o <output-file> -ot <output-type>")
 .option("i",{ alias: "inputFile", describe: "input file path", type: "string", demandOption: true })
 .option("it",{ alias: "inputType", describe: "input file type: JSON/YAML/XML..", type: "string", demandOption: true })
 .option("o",{ alias: "outputFile", describe: "output file path", type: "string", demandOption: false })
 .option("ot",{ alias: "outputType", describe: "output file type: JSON/YAML/XML..", type: "string", demandOption: true })
 .argv;


 const readInputFile = (inputFilePath) => {
    console.log(`input file path: ${inputFilePath}`);
    const textData = fs.readFileSync(inputFilePath, "utf8");

    return textData;
}

const convertInputTextToObject = (inputText, inputType) => {
    let inputObj = null;
    console.log(`input type: ${inputType}`);

    switch(inputType){
        case "JSON":
            inputObj = convertJSONToObject(textData);
            break;
        case "YAML":
            inputObj = convetYAMLToObject(textData);
            break;
        case "XML":
            inputObj = convetXMLToObject(textData);
            break;
        case "CSV":
            inputObj = convertCSVToObject(textData);
            break;
        default: 
            console.log("cannot parse input type");
    }

    return inputObj
}

const convertInputObjToText = (inputObj, outputType) => {
    let outputText = "";
    console.log(`output type: ${outputType}`);

    switch(outputType){
        case "JSON":
            outputText = convertObjectToJSON(inputObj);
            break;
        case "YAML":
            outputText = convertObjectToYAML(inputObj);
            break;
        case "XML":
            outputText = convertObjectToXML(inputObj);
            break;
        case "CSV": 
            outputText = convertObjectToCSV(inputObj);
            break;
        default: 
            console.log("cannot parse output type");
    }

    return outputText;
}

const rightOutputToFileOrConsole = (outputText, outputfilepath) => {
    if(outputfilepath){
        fs.writeFile(outputfilepath, outputText, (err) => {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    }else {
        console.log(outputText);
    }
}

const textData = readInputFile(options.inputFile);
const inputObj = convertInputTextToObject(textData, options.inputType);
const outputText = convertInputObjToText(inputObj, options.outputType);
rightOutputToFileOrConsole(outputText, options.outputFile);

