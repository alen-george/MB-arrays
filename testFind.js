let find = require("./find");
const items = [1, 2, 3, 4, 5, 5];

function cb(item) {
    return item == 9;   
  }
  
console.log(find(items, cb));
