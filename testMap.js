let map = require("./map");
const items = [1, 2, 3, 4, 5, 5];

function cb(item) {
    return item+1;
  }
  
console.log(map(items, cb));
