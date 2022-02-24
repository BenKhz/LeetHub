/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    // helper to swap
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let sArr = s.split('');
    let l = 0,
        r = sArr.length-1,
        regE = /[a-zA-Z]/;
    
    while(l < r) {
        if(!sArr[l].match(regE)) {
            l++;
            continue;
        }
        if(!sArr[r].match(regE)) {
            r--;
            continue;
        }
        swap(sArr, l, r);
        l++;
        r--;
    }
   return sArr.join('');
};