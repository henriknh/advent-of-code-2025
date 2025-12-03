// script must take two arguments, advent of calerndar day(number) and 'a' or 'b' for part a or b of the day's challenge
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
if (args.length < 2 || args.length > 3) {
  console.error("Usage: node index.js <day> <part> [--test]");
  process.exit(1);
}

const [day, part, test] = args;
const dayNumber = parseInt(day, 10);
if (
  isNaN(dayNumber) ||
  dayNumber < 1 ||
  dayNumber > 25 ||
  (part !== "a" && part !== "b")
) {
  console.error(
    'Invalid arguments. Day must be between 1 and 12, part must be "a" or "b".'
  );
  process.exit(1);
}

const dayPath = path.join(__dirname, `day${dayNumber}`);
const inputPath = path.join(
  dayPath,
  test === "--test" ? "test.txt" : "input.txt"
);
const solutionPath = path.join(dayPath, `${part}.js`);

if (
  !fs.existsSync(dayPath) ||
  !fs.existsSync(inputPath) ||
  !fs.existsSync(solutionPath)
) {
  console.error("The specified day or part does not exist.");
  process.exit(1);
}

const input = fs
  .readFileSync(inputPath, "utf8")
  .split("\n")
  .filter((line) => line.length > 0);
const solution = require(solutionPath);

if (typeof solution !== "function") {
  console.error("The solution file must export a function.");
  process.exit(1);
}

const result = solution(input);

if (typeof result !== "number") {
  console.error("The solution function must return a number.");
  process.exit(1);
}
console.log(`Day ${day} Part ${part.toUpperCase()} Result:`, result);
