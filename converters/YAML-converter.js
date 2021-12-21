const { parse, stringify } = require('yaml')

const convetYAMLToObject = (yaml) => {
    console.log(`convert from yaml`);
    const obj = parse(yaml);

    return obj;
}

const convertObjectToYAML = (obj) => {
    console.log(`convert to yaml`);
    const yaml = stringify(obj);

    return yaml;
}

module.exports = {convetYAMLToObject, convertObjectToYAML};