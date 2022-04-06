/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [], queue = [[[], nums]]
    while (queue.length) {
        const [curr, avail] = queue.shift()
        if (avail.length == 0) {
            result.push(curr.slice(0))
            continue
        } 
        for (let i=0; i<avail.length; i++) {
            let num = avail[i]
            queue.push([
                [...curr, num], 
                [...avail.slice(0,i), ...avail.slice(i+1)]
            ])
        }
    }
        return result
};