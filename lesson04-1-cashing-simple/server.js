console.log('Server started');
require('./file3');
console.log('Module 1 must called, but in cashed after file 1 calling');
require('./module1');
console.log('Module 2 must called, but in cashed after file 1 calling');
require('./module2');