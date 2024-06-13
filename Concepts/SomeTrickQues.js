let f1 = [1, 2, 3, undefined, 6, null, 8];
f1 = f1.filter(Boolean);
console.log(f1);
console.log(undefined + "");
console.log(undefined + 1);
console.log(undefined + NaN);
console.log(undefined + Infinity);
console.log(undefined - "");
console.log(undefined - 1);
console.log(undefined - NaN);
console.log(undefined - Infinity);

console.log(true + "")
console.log(true + 1)
console.log(true + NaN)
console.log(true + Infinity)

console.log("boolean false")
console.log(false - "")
console.log(false - 1)
console.log(false - NaN)
console.log(false - Infinity)

console.log("objects")
console.log({} + {});
console.log({} - {});
console.log({} - 1);
console.log({} - "");
console.log(1 - {});
console.log("" - {});


console.log("arrays")
console.log([] - 1);
console.log([1] - 1);
console.log([1, 2] - 1);