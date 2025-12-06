function example(input) {
  const ranges = input
    .filter((line) => line.includes("-"))
    .map((line) => {
      const [min, max] = line.split("-").map((num) => parseInt(num, 10));
      return { min, max };
    });
  const ids = input
    .filter((line) => !line.includes("-"))
    .map((line) => parseInt(line, 10));

  console.log(ranges, ids);

  let sum = 0;

  for (const id of ids) {
    for (const range of ranges) {
      if (range.min <= id && id <= range.max) {
        sum++;
        break;
      }
    }
  }

  return sum; // 3
}

module.exports = example;
