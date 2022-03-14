function filter(elements, cb) {
    let newArr = []
    for (let i = 1; i < elements.length; i++) {
      if (cb(elements[i])) {
        newArr.push(elements[i]);
      }
    }
  
    return newArr;
  }
  
  module.exports = filter;
  