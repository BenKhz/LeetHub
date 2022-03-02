/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    for(num of arr) {
        if(!map[num]) { map[num] = 1; }
        else { map[num] += 1}
    }
    const set = new Set();
    for(key of Object.values(map)) {
        if(set.has(key)) { return false }
        else {set.add(key)}
    }
    return true;
};