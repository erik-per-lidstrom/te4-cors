console.log("Hello, TypeScript Basic Types!");

const userName: string = "Alice";
const highscore: number = 2;
let isloggedin: boolean = true;
let countdown: number | null = null;

type gametag = string[];
let tag: gametag = ["gefgrsz", "edbfkjs", "sadbng", "fdgskl"];

type score = { point: number; isfinall: boolean };

let erik: score = { point: 130841, isfinall: true };

let usersetings: string | undefined;

function logError(err: string): void {
  console.log(err);
}
logError("This is an error message.");
function clalculate(num1: number, num2: number): number {
  return num1 / num2 / 100;
}
console.log(clalculate(2, 3));
let prosent: number = clalculate(2, 3);
