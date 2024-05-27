// Random number from min to max

function randomNum(min, max) {
  return min + Math.random() * (max - min);
}


function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}