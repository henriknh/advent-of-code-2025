function example(input) {
  let sum = 0;
  for (let line of input) {
    const nums = line.split("").map(Number);

    let largest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const string = `${nums[i]}${nums[j]}`;
        const test = parseInt(string, 10);

        if (test > largest) {
          largest = test;
        }
      }
    }

    sum += largest;
  }
  return sum; // 357
}

module.exports = example;
