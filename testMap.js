let map = require("./map");
const items = [1, 2, 3, 4, 5, 5];

function cb(elem,index,array) {
    return elem+1;
  }
  
console.log(map(items, cb));
