function example(input) {
  console.log(input);

  const cols = input.map((line) => line.split(" ").filter(Boolean));

  const rows = [];

  for (let x = 0; x < cols[0].length; x++) {
    const row = [];
    for (let y = cols.length - 1; y >= 0; y--) {
      row.push(cols[y][x]);
    }
    rows.push(row);
  }
  let sum = 0;

  for (const row of rows) {
    const symbol = row[0]; // *, +, -
    console.log(row);

    let result = 0;

    for (let i = 1; i < row.length; i++) {
      if (symbol === "+") {
        result += parseInt(row[i], 10);
      } else if (symbol === "-") {
        result -= parseInt(row[i], 10);
      } else if (symbol === "*") {
        if (i === 1) {
          result = parseInt(row[i], 10);
        } else {
          result *= parseInt(row[i], 10);
        }
      }
    }

    console.log("Result:", result);

    sum += result;
  }

  return sum;
}

module.exports = example;
