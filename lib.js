const {convertJSONToObject, convertObjectToJSON} = require("./converters/JSON-converter");
const {convetYAMLToObject, convertObjectToYAML} = require("./converters/YAML-converter");
const {convetXMLToObject, convertObjectToXML} = require("./converters/XML-converter");
const {convertCSVToObject, convertObjectToCSV} = require("./converters/CSV-converter");


module.exports = {convertJSONToObject, convertObjectToJSON,
    convetYAMLToObject, convertObjectToYAML,
    convetXMLToObject, convertObjectToXML,
    convertCSVToObject, convertObjectToCSV};