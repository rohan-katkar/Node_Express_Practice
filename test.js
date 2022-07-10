//const uname = 'yoshi';
//console.log(uname);
//const m_object = require('./module');
// const greet = (uname) => {
//     console.log("Hello", uname);
// }
// greet("Rohan");

const { names, numbers } = require('./module');
console.log(names, numbers);

const os = require('os');
console.log(os.platform());
