let reduce = require("./reduce");
const items = [1, 2, 3, 4, 5, 5];

function cb(startValue, elem) {

  return startValue+elem;
}

console.log(reduce(items, cb));
