let filter = require("./filter");
const items = [1, 2, 3, 4, 5, 5];

function cb(item) {
    return item == 5;   
  }
  
console.log(filter(items, cb));