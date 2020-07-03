export function Objetos() {
  const x = { a: 2, b: 3 };
  const y = { ...x, c: 4 }; // spread es6 -> 2015

  // TC 39

  const y2 = Object.assign({}, x, { c: 4 });

  const { a, b, ...rest } = y; // rest es6 -> 2015

  console.log("Objetos:");
  console.log(x, y, y2);
  console.log(a, b, rest, "\n");
}
