function example(input) {
  input = input.map((line) => line.split(",").map(Number));
  console.log(input);

  let sum = 0;
  let largestPair = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const p1 = input[i];
      const p2 = input[j];

      const x1 = p1[0];
      const y1 = p1[1];
      const x2 = p2[0];
      const y2 = p2[1];

      const area = (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y2) + 1);

      if (area > sum) {
        sum = area;
        largestPair = [p1, p2];
      }
    }
  }

  console.log(largestPair);

  return sum; // 50
}

module.exports = example;
