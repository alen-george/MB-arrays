let find = require("./find");
const items = [1, 2, 3, 4, 5, 5];

function cb(elem,index,array) {
    return elem == 9;   
  }
  
console.log(find(items, cb));
