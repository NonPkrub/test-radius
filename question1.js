function Solution(N) {
  const array = N.join("");
  const number = Number(array) + 1;
  const numberArray = String(number).split("");
  //console.log(Array.from(numberArray, Number));
  return Array.from(numberArray, Number);
}

const case1 = [2, 3, 3];
const case2 = [9, 9, 9];
console.log(Solution(case1));
console.log(Solution(case2));
