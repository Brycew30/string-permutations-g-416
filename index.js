function findAllPermutations(string) {
  let array = [];
  if (string.length < 2) {
    return [string];
  }
  for (let i = 0; i < string.length; i++) {
    let start = string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1);
    let newArray = findAllPermutations(remaining)
    newArray.forEach(permutation => {
      array.push(start + permutation)
    })
  }
  return array;
}
