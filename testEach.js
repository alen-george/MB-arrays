let each = require("./each");
const items = [1, 2, 3, 4, 5, 5];

function cb(item, ind) {
    console.log(item);
  }
  
each(items, cb);
