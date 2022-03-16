function reduce(elements, cb, startingValue) {

  if (!elements.length) {
    return {};
  }
  let result;

  let i = 0;

  if (startingValue == undefined) {   //Checks for starting value
    startingValue = elements[0];
    i = 1;
  }

  for (; i < elements.length; i++) {    
    result = cb(startingValue, elements[i], i, elements);
    startingValue = result;
  }
 
  return result;
}

module.exports = reduce;
