/**
 * Function that generate a N numbers list of random numbers between Min and Max
 * and return the list and the lowest and highest number of the list
 */

function generateRandomNumberList(N, Min, Max) {
  let arr = [];
  for (let i=0; i<N; i++) {
    const number = Math.floor(Math.random() * Max) + Min;
    arr.push(number);
  }
  return {
    numbers: arr.sort((a, b) => a - b),
    low: Math.min(...arr),
    high: Math.max(...arr),
  };
}

const N = 20;
const Min = 1;
const Max = 100;
const list = generateRandomNumberList(N, Min, Max);
console.log("List:", list.numbers);
console.log("Lowest", list.low);
console.log("Highest:", list.high);
