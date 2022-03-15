let filter = require("./filter");
const items = [1, 2, 3, 4, 5, 5];

function cb(elem,index,arr) {
    return elem == 5;   
  }
  
console.log(filter(items, cb));