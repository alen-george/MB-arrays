let each = require("./each");
const items = [1, 2, 3, 4, 5, 5];

function cb(elem,index,arr) {
    console.log(elem);
  }
  
each(items, cb);
