/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    const result = [...Array(n)].map(e => Array(n).fill(0))
    let movesRemain = (n**2);
    let [row, col] = [0, 0];
    const move = {
        right: () => [row, ++col],
        left: () => [row,--col],
        down: () => [ ++row, col ],
        up: () => [ --row, col],
    }
    const directions = ['right', 'down', 'left', 'up'];
    let dirIdx = 0;
    const isValidMove = (coordPair) => {
        if(!result[coordPair[0]]) { 
            return false; }
        else {
            return result[coordPair[0]][coordPair[1]] === 0 ? true : false;
        }
    }
    let pos = [row, col];
    let attempt;
    let count = 1;
    while(movesRemain) {
        // set current value
        result[pos[0]][pos[1]] = count;
        count++;
        movesRemain--;
        // try a new position
        attempt = move[directions[dirIdx]]();
        // while attempt is not valid, revert and try new attempt.
        while(!isValidMove(attempt) && movesRemain) {
            [row, col] = pos;
            dirIdx = dirIdx === directions.length-1 ? 0: dirIdx + 1;
            attempt = move[directions[dirIdx]]();
        }
        pos = attempt;
    }
    return result;
};