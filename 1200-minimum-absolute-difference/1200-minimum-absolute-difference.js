/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let res = [], gap = arr[arr.length - 1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    let x = arr[i], y = arr[i - 1], currGap = x - y;

    if (currGap === gap) {
      res.push([y, x])
      continue
    }
    if (currGap < gap) {
      res = [[y, x]]
      gap = currGap
    }
  }
  return res
};