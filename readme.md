# text-format-converter

js package for convert different format of text file

lets say you need yaml configuration and you already have json file with the same data,
just use this package and convert the file to yaml.

## installation
```sh
npm i format-cnv
```
or install globally for cli usage
```sh
npm i -g format-cnv
```

## Code usage
```javascript
const {convertCSVToObject} = require("format-cnv/lib");

const csvObj = convertCSVToObject(`fname,lname
ofir, elarat
fisrtname, lastname`);

console.log(csvObj)
```

### Functions:

|       function          |         description                  | [input] [output]   | 
|-------------------------|--------------------------------------|--------------------|
| convertCSVToObject      | convert csv string format to object  | [string] [object] |
| convertObjectToCSV      | convert object to csv string foramt  | [object] [string] |
| convetXMLToObject       | convert xml string format to object  | [string] [object] |
| convertObjectToXML      | convert object to xml string foramt  | [object] [string] |
| convetYAMLToObject      | convert yaml string format to object | [string] [object] |
| convertObjectToYAML     | convert object to yaml string foramt | [object] [string] |
| convertJSONToObject     | convert json string format to object | [string] [object] |
| convertObjectToJSON     | convert object to json string foramt | [object] [string] |
| convertb64ToUTF8        | convert base64 string UTF8 object    | [string] [string] |
| convertTextToBase64     | convert string to base64 string      | [string] [string] |


## CLI usage

```sh
Usage: -i <input-file> -it <input-type> -o <output-file> -ot <output-type>
```

|       ALIAS             |         DESCRIPTION               |           TYPE             |  
|-------------------------|-----------------------------------|----------------------------|
|      --help             | Show help                         |            [boolean]       |
|      --version          | Show version number               |            [boolean]       |
|  -i, --inputFile        |  input file path                  |   [string] [required]      |
|      --it, --inputType  | input file type: JSON/YAML/XML..  |  [string] [required]       |
|  -o, --outputFile       |   output file path                | [string] {console if null} |
|      --ot, --outputType |  output file type: JSON/YAML/XML..| [string] [required]        |

The supported format for now are:
- JSON
- XML
- YAML
- CSV

### Examples:
- JSON To YAML
    > format-cnv -i /sample.json --it JSON -o /output.yaml --ot YAML

- JSON To XML
    > format-cnv -i /sample.json --it JSON -o /output.xml --ot XML

- YAML To JSON
    > format-cnv -i /sample.yaml --it YAML -o /output.json --ot JSON


