function reduce(elements, cb,startingValue=elements[0]) {
  let result =0;
  for (let i = 1; i < elements.length; i++) {
    result = cb(startingValue, elements[i],i,elements);
    startingValue=result
  }

  return result;
}

module.exports = reduce;
