const path = require('path')

// BASE FILE NAME
console.log(path.basename(__filename)) // path_demo.js

// DIRECTORY NAME
console.log(path.dirname(__filename)) // /Users/zzmacpro/Projects/NodejsProject/node-crashcourse/reference

// FILE EXTENSION
console.log(path.extname(__filename)) // .js

// CREATE PATH OBJECT
console.log(path.parse(__filename))
// {
//   root: '/',
//   dir: '/Users/zzmacpro/Projects/NodejsProject/node-crashcourse/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// CONCATENATE PATHS
console.log(path.join(__dirname, 'test', 'hello.html')) // /Users/zzmacpro/Projects/NodejsProject/node-crashcourse/reference/test/hello.html
