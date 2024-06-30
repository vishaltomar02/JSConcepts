const myMoney = {
  quarters: 4,
  dimes: 10,
  nickels: 20,
  pennies: 100,
};

console.log("condition", myMoney.__proto__ === Object.prototype);



for (const coin of myMoney) {
  console.log(`${coin}: ${myMoney[coin]}`);
}


const arr = [1, 2, 3, 4]


for (let key in myMoney) {

}