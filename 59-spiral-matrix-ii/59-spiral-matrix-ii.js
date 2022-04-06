/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [...Array(n)].map(e => Array(n).fill(0))
    let rem = (n**2);
    let [r, c] = [0, 0];
    const move = {
        r: () => [r, ++c],
        l: () => [r,--c],
        d: () => [ ++r, c ],
        u: () => [ --r, c],
    }
    const dir = ['r', 'd', 'l', 'u'];
    let dIdx = 0;
    const isValid = (pair) => {
        if(!result[pair[0]]) { 
            return false; }
        else {
            return result[pair[0]][pair[1]] === 0 ? true : false;
        }
    }
    let pos = [r, c];
    let tryPos;
    let count = 1;
    while(rem) {
        result[pos[0]][pos[1]] = count;
        count++;
        rem--;
        tryPos = move[dir[dIdx]]();
        while(!isValid(tryPos) && rem) {
            [r, c] = pos;
            dIdx = dIdx === dir.length-1 ? 0: dIdx + 1;
            tryPos = move[dir[dIdx]]();
        }
        pos = tryPos;
    }
    return result;
};