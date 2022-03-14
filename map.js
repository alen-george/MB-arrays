function map(elements, cb) {
  let newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr[i] = cb(elements[i]);
  }

  return newArr;
}

module.exports = map;
