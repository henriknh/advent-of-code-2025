function example(input) {
  const ranges = input
    .filter((line) => line.includes("-"))
    .map((line) => {
      const [min, max] = line.split("-").map((num) => parseInt(num, 10));
      return { min, max };
    })
    // .reduce(() => {
    //   return [
    //     { min: 5, max: 10 },
    //     { min: 15, max: 20 },
    //     { min: 8, max: 17 },
    //   ];
    // })
    .sort((a, b) => a.min - b.min)
    .reduce((ranges, range) => {
      const overlapsIndex = ranges.findIndex(
        (r) =>
          (range.min <= r.min && range.max >= r.max) || // range engulfs r
          (r.min <= range.min && r.max >= range.max) || // r engulfs range
          (range.min <= r.min && range.max >= r.min) || // range overlaps start of r
          (range.min <= r.max && range.max >= r.max) || // range overlaps end of r
          (r.min <= range.min && r.max >= range.min) || // r overlaps start of range
          (r.min <= range.max && r.max >= range.max) // r overlaps end of range
      );

      if (overlapsIndex !== -1) {
        const overlappingRange = ranges[overlapsIndex];
        if (range.min <= overlappingRange.min) {
          overlappingRange.min = range.min;
        }
        if (range.max > overlappingRange.max) {
          overlappingRange.max = range.max;
        }
        ranges[overlapsIndex] = overlappingRange;
      } else {
        ranges.push(range);
      }
      return ranges;
    }, []);

  let sum = ranges.reduce((acc, range) => acc + (range.max - range.min + 1), 0);

  return sum; // 14
}

module.exports = example;
