const convertb64ToUTF8 = (base64String) => {
    console.log(`convert from base64`);
    const buff = Buffer.from(base64String, 'base64');
    const str = buff.toString('utf-8');
    
    return str;
}

const convertTextToBase64 = (stringInput) => {
    console.log(`convert to base64`);
    const buff =  Buffer.from(stringInput, 'utf-8');
    const base64 = buff.toString('base64');

    return base64;
}

module.exports = {convertb64ToUTF8, convertTextToBase64};