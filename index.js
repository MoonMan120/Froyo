let flavors = prompt(
  "Enter flavors here separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
let flavorList = flavors.split(",");
const count = all(flavorList);
console.table(all);

function all(Flist) {
  const all = {};
  for (const element of Flist) {
    if (element in all) {
      all[element] += 1;
    } else {
      all[element] = 1;
    }
  }
  return all;
}
