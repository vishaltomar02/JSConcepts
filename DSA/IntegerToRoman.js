const map = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};

function integerToRoman(num) {
  let res = "";
  for (let key in map) {
    let repeatCount = Math.floor(num / map[key]);
    if (repeatCount) {
      res += key.repeat(repeatCount);
    }
    console.log(res, num, map[key], key, repeatCount)
    num = num % map[key];
    if (!num) return res;
  }
  return res;
}

integerToRoman(839);