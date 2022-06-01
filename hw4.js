const fs = require('fs-extra');

// 1. create first folder
fs.ensureDirSync('./firstFolder/');

// 2. create *.txt file
fs.ensureFileSync('./firstFolder/empty.txt');

// 3. create second folder
fs.ensureDirSync('./secondFolder/');

// 4. move *.txt file from first folder to second folder
fs.moveSync('./firstFolder/empty.txt', './secondFolder/empty.txt');

// 5. create third folder
fs.ensureDirSync('./thirdFolder');

// 6. copy *.txt file from second folder to third folder
fs.copyFileSync('./secondFolder/empty.txt', './thirdFolder/empty.txt');

// 7. delete files
fs.removeSync('./secondFolder/empty.txt', './thirdFolder/empty.txt');

// 8. delete all folders (for some reason you cannot list all folder paths for delete via ',')
fs.removeSync('./firstFolder');
fs.removeSync('./secondFolder');
fs.removeSync('./thirdFolder');
