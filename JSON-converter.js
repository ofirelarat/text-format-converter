const convertJSONToObject = (json) => {
    console.log(`convert from json`);
    const jsonObject = JSON.parse(json);
    
    return jsonObject;
}

const convertObjectToJSON = (obj) => {
    console.log(`convert to json`);
    const json = JSON.stringify(obj);

    return json;
}

module.exports = {convertJSONToObject, convertObjectToJSON};