function flatten(elements) {
  let arr = [];
  function checkNestedArray(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        checkNestedArray(elements[i]);
      } else {
        arr.push(elements[i]);
      }
    }
  }
  checkNestedArray(elements);

  return arr;
}

module.exports = flatten;

// console.log(flatten([1, [2], [3, [[4]]]]));

// let arr = [1, [2], [3, [[4]]]]
