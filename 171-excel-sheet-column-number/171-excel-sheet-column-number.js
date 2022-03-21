/**
 * @param {string} columnTitle
 * @return {number}
 */
	var titleToNumber = function (columnTitle) {
		if (columnTitle.length == 1) return columnTitle.charCodeAt(columnTitle) % 64;
		let result = 0;
		for (let i = columnTitle.length - 1, k = 0; i >= 0; i--, k++) {
			result += (columnTitle.charCodeAt(i) - 64) * (26 ** k);
		};
		return result;
	};