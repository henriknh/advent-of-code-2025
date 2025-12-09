function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
}

function distString(a, b) {
  const p1 = a.split(",").map(Number);
  const p2 = b.split(",").map(Number);

  return dist(
    { x: p1[0], y: p1[1], z: p1[2] },
    { x: p2[0], y: p2[1], z: p2[2] }
  );
}

function isEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.z === b.z;
}

function example(input) {
  input = input;
  // .map((line) => line.split(",").map(Number))
  // .map(([x, y, z]) => ({ id: `${x},${y},${z}`, x, y, z }));

  let pairs = [];
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input.length; y++) {
      if (x === y) {
        continue;
      }

      const p1 = input[x];
      const p2 = input[y];
      const d = distString(p1, p2);

      pairs.push([...[p1, p2].sort(), d].join("|"));
    }
  }

  pairs = [...new Set(pairs)];

  pairs = pairs.map((str) => {
    const [p1str, p2str, ds] = str.split("|");
    const [x1, y1, z1] = p1str.split(",").map(Number);
    const [x2, y2, z2] = p2str.split(",").map(Number);
    const p1 = { id: p1str, x: x1, y: y1, z: z1 };
    const p2 = { id: p2str, x: x2, y: y2, z: z2 };
    return { p1, p2, d: Number(ds) };
  });

  pairs = pairs.sort((a, b) => a.d - b.d);
  pairs = pairs.map((pair) => [pair.p1.id, pair.p2.id]);
  console.log("Distances sorted", pairs.length);

  let circuts = [];
  for (let i = 0; i < 10; i++) {
    const closestBoxes = pairs[i];

    const circutWithBox = circuts.find(
      (circut) =>
        circut.some((box) => box === closestBoxes[0]) ||
        circut.some((box) => box === closestBoxes[1])
    );

    if (circutWithBox) {
      const hasP1 = circutWithBox.some((box) => box === closestBoxes[0]);
      const hasP2 = circutWithBox.some((box) => box === closestBoxes[1]);
      if (!hasP1) {
        circutWithBox.push(closestBoxes[0]);
      }
      if (!hasP2) {
        circutWithBox.push(closestBoxes[1]);
      }
    } else {
      circuts.push([closestBoxes[0], closestBoxes[1]]);
    }
  }

  let didMerge = true;
  while (didMerge) {
    didMerge = false;
    for (let i = 0; i < circuts.length; i++) {
      const boxes = circuts[i];

      const hasCommonBox = circuts.findIndex((_boxes) => {
        if (_boxes === boxes) {
          return false;
        }

        return _boxes.some((box) => boxes.some((boxB) => boxB === box));
      });

      if (hasCommonBox >= 0) {
        const commonCircut = circuts[hasCommonBox];

        circuts[i] = [...new Set([...boxes, ...commonCircut])];
        circuts.splice(hasCommonBox, 1);
        didMerge = true;
        continue;
      }
    }
  }

  console.log("Circuts:", circuts);
  console.log("Circuts:", circuts.length);

  circuts = circuts.sort((a, b) => b.length - a.length).slice(0, 3);

  console.log(
    "Circuts top 3:",
    circuts.map((c) => c.length)
  );

  let sum = circuts.reduce((a, c) => a * c.length, 1);

  return sum; // 40 // 21141
}

module.exports = example;
