const numberMap = {
  0: 'no',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten'
}

export const recite = (initialBottlesCount, takeDownCount) => {
  let arrOfPoem = [];
  for (let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    arrOfPoem = [
      ...arrOfPoem,
      `${numberMap[i]} green bottle${i > 1 ? "s" : ""} hanging on the wall,`,
      `${numberMap[i]} green bottle${i > 1 ? "s" : ""} hanging on the wall,`,
      `And if one green bottle should accidentally fall,`,
      `There'll be ${numberMap[i - 1].toLowerCase()} green bottle${i - 1 !== 1 ? "s" : ""} hanging on the wall.`,
      ...(i !== (initialBottlesCount - takeDownCount + 1) ? [''] : [])
    ]
  }
  console.log(arrOfPoem)
};

recite(10, 1);