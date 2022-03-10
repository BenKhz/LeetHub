/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let res = 0;
  for( i in grid ) {
    // find xy area. add 1 for every occupied grid position
    for (j in grid) {
      if (grid[i][j] > 0) { res++; }
    }
    // find xz area. by finding largest stack in each row
    res += Math.max(...grid[i]);
    // find yz area. by finding largest stack in each col
    res += Math.max(...grid.map(r => r[i]));
  }
  return res;
};
    