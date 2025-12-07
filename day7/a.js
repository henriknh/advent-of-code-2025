function example(input) {
  console.log(input);

  let sum = 0;

  let beams = [];

  beams.push(input[0].indexOf("S"));

  console.log(beams);

  for (let y = 1; y < input.length; y++) {
    const row = input[y].split("");

    beams = [
      ...new Set(
        beams.reduce((newBeams, beam) => {
          if (row[beam] === "^") {
            sum++;

            if (beam - 1 >= 0 && beam + 1 < row.length) {
              return [...newBeams, beam - 1, beam + 1];
            } else if (beam - 1 >= 0) {
              return [...newBeams, beam - 1];
            } else if (beam + 1 < row.length) {
              return [...newBeams, beam + 1];
            }
          }
          return [...newBeams, beam];
        }, [])
      ),
    ];

    console.log("Map:");
    console.log(input.join("\n"));
  }

  console.log("Beams", beams.length);

  const row = input[input.length - 1].split("");
  for (let beam of beams) {
    row[beam] = "E";
  }
  input[input.length - 1] = row.join("");

  console.log("Map:");
  console.log(input.join("\n"));
  return sum; // 21
}

module.exports = example;
