/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  let [buffer, result] = [[],[]];
  bfs(0, target);
  return result;

  function bfs(start, target) {
    //base cases
    if (target === 0) {
        return result.push(buffer.slice()); 
    }
    if (target < 0 || start === candidates.length) { 
        return;
    }
    buffer.push(candidates[start]);
    bfs(start, target - candidates[start]);
    buffer.pop();
    bfs(start + 1, target);
  }
}