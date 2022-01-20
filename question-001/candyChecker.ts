// 1. Write a function in Typescript, which receives an integer number and has the next logic:
// a) it prints "candy" if number is divisible by 2;
// b) it prints "bar" if number is divisible by 11;
// c) it prints "candybar" if number is divisible by 22;
// d) it prints the value of number for all other cases;
// note: number is a positive integer number;


interface ICandyInput {
  (num: number): void;
}

const candyChecker: ICandyInput = (num: number) => {
  let result: string | number = "";

  return result = num;
};