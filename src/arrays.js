export function Arrays() {
  const arr = [1, 2, 3];
  const doubled = arr.map((x) => x / 2); // map es6 -> 2015

  const shorthands = [false && 2, false && 3, true && 4];
  const filtered = shorthands.filter(Boolean);

  // 0 NaN null undefined false

  const spread = [...arr, 4]; // spread es6 -> 2015
  const [r, e, s, ...resto] = spread; // rest es6 -> 2015

  console.log("Arrays:");
  console.log(arr, doubled, shorthands, filtered, spread);
  console.log(r, e, s, resto);
  console.log(...spread, "\n");
}
