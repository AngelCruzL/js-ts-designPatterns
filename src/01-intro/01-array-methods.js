function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

const fSum = sum;
result = fSum(1, 5);
console.log(result);

function operation(fn, a, b) {
  console.log("Desde operation");
  console.log(fn(a, b));
}

operation(sum, 3, 9);

operation((a, b) => a * b, 3, 9);
operation((a, b) => {
  const c = a + b;
  return c * 2;
}, 6, 9)

// foreach
const names = ["Juan", "Pedro", "Maria", "Luisa"];
names.forEach(name => console.log(name));
names.forEach(name => console.log(name.toUpperCase()));
console.log(names);

// sort
names.sort();
console.log(names);

// map
const namesUpper = names.map(name => name.toUpperCase());
console.log(names)
console.log(namesUpper);

// reduce
const numbers = [5, 7, 10, 1, 6, 1];
const sumNumbers = numbers.reduce((acc, number) => acc + number, 0);
console.log(sumNumbers);
