module.exports = function getZerosCount(number, base) {
  let currentNumber = number;
  let currentBase = base;
  let multiplier = 2;
  let count = 0;
  let multiArr = [];
  let countArr = [];
  let result = 0;
  let resArr = [];
  let value = 0;

  while ((currentBase != 1) || (count != 0)) {
    if (currentBase % multiplier == 0) {
      count++;
      currentBase /= multiplier;
    } else {
      if (count != 0) {
        multiArr.push(multiplier);
        countArr.push(count);
        count = 0;
        multiplier++;
      } else {
        multiplier++;
      }
    } 
  }

  for (i = 0, length = multiArr.length; i < length; i++) {
    value = multiArr[i];
    while (currentNumber / value > 1) {
      result += Math.floor(currentNumber / value);
      value *= multiArr[i];
    }
    resArr.push(Math.floor(result / countArr[i]));
    result = 0;
  }
  
  resArr.sort(function(a,b) {
    return a - b;
  });

  return resArr[0];
}
