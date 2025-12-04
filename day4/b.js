function example(input) {
  input = input.map((line) => line.split(""));

  console.log("Before");
  console.log(input.map((line) => line.join("")).join("\n"));

  let sum = 0;
  let sum2 = 1;

  while (sum2 > 0) {
    sum2 = 0;

    let coords = [];
    for (let x = 0; x < input[0].length; x++) {
      for (let y = 0; y < input.length; y++) {
        let p = [];
        let neighboringPaperRolls = 0;
        if (input[y][x] === "@") {
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              const xdx = x + dx;
              const ydy = y + dy;

              if (dx === 0 && dy === 0) {
                continue;
              }
              if (
                xdx < 0 ||
                ydy < 0 ||
                xdx >= input[0].length ||
                ydy >= input.length
              ) {
                continue;
              }
              if (input[ydy][xdx] === "@") {
                p.push([xdx, ydy]);
                neighboringPaperRolls++;
              }
            }
          }

          if (neighboringPaperRolls < 4) {
            sum2++;
            coords.push([x, y]);
          }
        }
      }
    }

    for (let [x, y] of coords) {
      input[y][x] = ".";
    }

    sum += sum2;
  }

  console.log("After");
  console.log(input.map((line) => line.join("")).join("\n"));

  return sum; // 13
}

module.exports = example;
