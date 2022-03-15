function find(elements, cb) {
 
  for (let i = 1; i < elements.length; i++) {
    if (cb(elements[i],i,elements)) {
      return elements[i];
    }
  }

  return undefined;
}

module.exports = find;
