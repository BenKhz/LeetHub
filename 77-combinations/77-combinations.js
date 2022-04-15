/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
    var combine = function(n, k) {
    const result = [];
	buildCombos(1);
	return result;

	function buildCombos(start, list = []) {
		for(let i = start; i <= n; ++i) {
			list.push(i);
			if(list.length === k) {
				result.push([...list]);
			}
			buildCombos(i + 1, list);
			list.pop();
		}
	}
};