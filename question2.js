function Solution(S) {
  const sentence = S.split(/[.?'']/);
  const word = sentence.filter((word) => word.split(/[?\s]+/g));
  const eachword = word.map((words) => words.split(" ").length);
  console.log(eachword);
}

const case1 = "We test coders. Give us a try?";
const case2 = "Forget CVs..Save time . x x";

console.log(Solution(case1));
console.log(Solution(case2));
