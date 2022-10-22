const convertCSVToObject = (csv) => {
    console.log(`convert from csv`);

    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result
}

const convertObjectToCSV = (obj) => {
    console.log(`convert to csv`);
    let csv = '';

    const fields = Object.keys(obj[0])
    csv += fields.join(',') + '\n';

    for (let i = 0; i < obj.length; i++) {
        let line = '';
        for (let index in obj[i]) {
            if (line != '') line += ','

            line += obj[i][index];
        }

        csv += line + '\n';
    }

    return csv;
}

module.exports = {convertCSVToObject, convertObjectToCSV};