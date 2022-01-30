/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
// in order to win you must end a turn with stones left being between 1-4
// so we can tell if there is a remainder after dividing by 4
    return !(n%4 === 0)
};
