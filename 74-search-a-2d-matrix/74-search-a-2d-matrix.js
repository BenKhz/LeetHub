/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    while(i<matrix.length-1) {
        if(target <= matrix[i][matrix[i].length-1]) {
            break;
        } else { i++; }
    }
    for(let entry of matrix[i]) {
        if(entry === target) {
            return true;
        }
    }
    return false;
};