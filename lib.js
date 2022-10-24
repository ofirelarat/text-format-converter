const {convertJSONToObject, convertObjectToJSON} = require("./converters/JSON-converter");
const {convetYAMLToObject, convertObjectToYAML} = require("./converters/YAML-converter");
const {convetXMLToObject, convertObjectToXML} = require("./converters/XML-converter");
const {convertCSVToObject, convertObjectToCSV} = require("./converters/CSV-converter");
const {convertb64ToUTF8, convertTextToBase64} = require("./converters/BASE64-converter");



module.exports = {convertJSONToObject, convertObjectToJSON,
    convetYAMLToObject, convertObjectToYAML,
    convetXMLToObject, convertObjectToXML,
    convertCSVToObject, convertObjectToCSV,
    convertb64ToUTF8, convertTextToBase64};