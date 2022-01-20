// 1. Write a function in Typescript, which receives an integer number and has the next logic:
// a) it prints "candy" if number is divisible by 2;
// b) it prints "bar" if number is divisible by 11;
// c) it prints "candybar" if number is divisible by 22;
// d) it prints the value of number for all other cases;
// note: number is a positive integer number;

interface ICandyInput {
  (num: number): void
}

const candyChecker: ICandyInput = (num: number) => {
  let result: string | number = "";
  if (typeof num !== "number") throw new Error ('runtime type checking');
  if (num < 0) return;
  if (num === 0) return result = num;
  if (num % 22 === 0) return console.log(result = "candybar"); 
  if (num % 2 === 0)  return console.log(result = "candy"); 
  if (num % 11 === 0) return console.log(result = "bar");
  return console.log(result = num);
};