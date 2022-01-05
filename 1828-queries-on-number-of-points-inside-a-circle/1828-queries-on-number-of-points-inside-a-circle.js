/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const results = [];
    for(var query of queries){
        var count = 0;
        for(var point of points){
            const distance = (query[0]-point[0])**2 + (query[1]-point[1])**2;
            count += distance <= query[2]**2 ? 1 : 0;
        }
        results.push(count)
    }
    return results;
};