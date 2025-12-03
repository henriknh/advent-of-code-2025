function example(input) {
  let sum = 0;
  for (let line of input) {
    const nums = line.split("").map(Number);

    // parts
    let p = [];

    // previous largest index
    let pli = -1;

    // step
    for (let s = 12; s > 0; s--) {
      // largest index
      let li = nums.length - s;
      // look for largest number after previous largest index
      for (let i = nums.length - s; i > pli; i--) {
        if (nums[i] >= nums[li]) {
          li = i;
        }
      }

      p.push(nums[li]);
      pli = li;
    }

    console.log(p.join(""), p.length);

    sum += parseInt(p.join(""), 10);
  }
  return sum; // 3121910778619
}

module.exports = example;

// 987654321111
// 811111111119
// 434234234278
// 888911112111

// 3121910778619 min
// 3121910778619
