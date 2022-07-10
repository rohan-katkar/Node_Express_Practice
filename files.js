const fs = require('fs')

//reading files
// fs.readFile('./docs/example.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

//writing files
// fs.writeFile('./docs/example.txt', 'Hello world', () => {
//     console.log('file was written');
// });
// fs.writeFile('./docs/example2.txt', 'Hello again', () => {
//     console.log('file was written');
// })

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder removed');
//     })
// }

//deleting files
// if (fs.existsSync('./docs/example2.txt')){
//     fs.unlink('./docs/example2.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }