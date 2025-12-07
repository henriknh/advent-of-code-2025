function example(input) {
  let beams = input[0].split("").fill(0);
  beams[input[0].indexOf("S")] = 1;

  for (let y = 1; y < input.length; y++) {
    const row = input[y].split("");

    for (let x = 0; x < row.length; x++) {
      if (beams[x] > 0) {
        if (row[x] === "^") {
          beams[x - 1] += beams[x];
          beams[x + 1] += beams[x];
          beams[x] = 0;
        }
      }
    }

    for (let x = 0; x < row.length; x++) {
      if (beams[x] > 0) {
        row[x] = beams[x];
      }

      row[x] = String(row[x]).padEnd(3, " ");
    }

    input[y] = row.join("");
  }
  // let beams = test(input, 1, );

  input[0] = input[0]
    .split("")
    .map((s) => String(s).padEnd(3, " "))
    .join("");

  console.log("Map:");
  console.log(input.join("\n"));

  console.log("Beams", beams.join(""));

  return beams.reduce((sum, beam) => sum + beam, 0); // 40
}

module.exports = example;
