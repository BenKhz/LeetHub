/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = new Set();
    results.add(JSON.stringify(nums))
    const findSubset = (array) => {
        if(!array.length) { return }
        let subsets = [];
        for(var i =0; i<array.length; i++) {
            let temp = array.slice();
            temp.splice(i,1);
            subsets.push(temp)    
        }
        subsets.forEach(e => results.add(JSON.stringify(e)));
        subsets.forEach(arr => findSubset(arr))
    }
    findSubset(nums)
    let output = []; 
    results.forEach((v, k) => {
        output.push(JSON.parse(k))
    })
    return output;    
};