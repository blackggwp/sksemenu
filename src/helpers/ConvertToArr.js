function ConvertToArr(str, key) {
  let data = {};
  const keyTxt = key;
  const keyStart = str.search(keyTxt);

  const skipKey = str.substr(keyStart + keyTxt.length + 1);
  const firstQuote = skipKey.search("'");
  const skipfirstQuote = skipKey.substr(firstQuote + 1);
  const secQuote = skipfirstQuote.search("'");

  const keyObj = str.substr(keyStart, keyTxt.length);
  const Val = str.substr(keyStart + keyTxt.length + 6, secQuote);
  data[keyObj] = String(Val);
  return data;
}
function combineObj(array, str) {
  let data = {}
  for (let index = 0; index < array.length; index++) {
    const resObj = ConvertToArr(str, array[index])
    data[array[index]] = resObj[array[index]]
  }
  return data
}
function joinCols(array) {
  return array.join().split(",").map(i => i).join()
}
function joinVal(array) {
  // return array.join().split(",").map(i => '\'' + i + '\'').join()
  return array.map(i => '\'' + i + '\'').join()
}

module.exports = { ConvertToArr, joinCols, joinVal, combineObj }
