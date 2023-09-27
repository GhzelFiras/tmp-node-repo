const os = require('os');
const user = os.userInfo();
const totalMem = os.totalmem();
const freeMem = os.freemem();
const {readFileSync , writeFileSync} = require('fs');

//console.log(user)
//console.log(totalMem)
//console.log(freeMem)
writeFileSync('./content/newFile.txt','Hello old file');
