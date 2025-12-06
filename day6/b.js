function example(input) {
  const cols = input.map((line) => line.split(""));

  let sum = 0;

  let symbol = "";

  let result = 0;
  for (let x = 0; x < cols[0].length; x++) {
    if (cols[cols.length - 1][x] !== " ") {
      symbol = cols[cols.length - 1][x];

      console.log("result", result);

      sum += result;
      result = 0;
    }

    let str = "";
    for (let y = 0; y < cols.length - 1; y++) {
      if (cols[y][x] === " ") {
        continue;
      }

      str += cols[y][x];
    }

    let num = parseInt(str, 10);

    if (isNaN(num)) {
      continue;
    }
    console.log(symbol, str, num);

    if (symbol === "+") {
      result += num;
    } else if (symbol === "-") {
      result -= num;
    } else if (symbol === "*") {
      if (result === 0) {
        result = num;
      } else {
        result *= num;
      }
    }
  }

  sum += result;

  return sum;
}

module.exports = example;
