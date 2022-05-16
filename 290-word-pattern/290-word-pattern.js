/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = {};
    let entries = new Set()
    let count = 0;
    let arr = s.split(' ');
    if(pattern.length !== arr.length) { return false }
    for(let i = 0; i<arr.length; i++) {
        if(!map[pattern[i]] && !entries.has(arr[i])) { 
            map[pattern[i]] = arr[i];
            entries.add(arr[i])
        }
        else { 
            if(arr[i] !== map[pattern[i]]) {
                return false
            }
        }
    }
    return true;
};
