# text-format-converter

js package for convert different format of text file

lets say you need yaml configuration and you already have json file with the same data,
just use this package and convert the file to yaml.

Usage: -i <input-file> -it <input-type> -o <output-file> -ot <output-type>

|       ALIAS             |         DESCRIPTION               |           TYPE             |  
|-------------------------|-----------------------------------|----------------------------|
|      --help             | Show help                         |            [boolean]       |
|      --version          | Show version number               |            [boolean]       |
|  -i, --inputFile        |  input file path                  |   [string] [required]      |
|      --it, --inputType  | input file type: JSON/YAML/XML..  |  [string] [required]       |
|  -o, --outputFile       |   output file path                | [string] {console if null} |
|      --ot, --outputType |  output file type: JSON/YAML/XML..| [string] [required]        |