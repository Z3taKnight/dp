/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  let obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let arr = [];
  let digitsArr = digits.split("");
  while (digitsArr.length > 0) {
    if (arr.length == 0) arr.push(...obj[digitsArr[0]]);
    else {
      let temp = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < obj[digitsArr[0]].length; j++) {
          let str = arr[i] + obj[digitsArr[0]][j];
          temp.push(str);
        }
      }
      arr = temp;
    }
    digitsArr.shift();
  }
  return arr;
};

console.log(letterCombinations("23"));
