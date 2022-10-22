const { parseString, Builder } = require('xml2js');

const convetXMLToObject = async (xml) => {
    console.log(`convert from xml`);
    const obj = await parseString(xml);

    return obj;
}

const convertObjectToXML = (obj) => {
    console.log(`convert to xml`);
 
    const builder = new Builder();
    const xml = builder.buildObject(obj);

    return xml;
}

module.exports = {convetXMLToObject, convertObjectToXML};