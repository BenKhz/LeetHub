/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // from number to letter
    // base 26 math.
    // 1 = A or 1(26**0)
    // 26 = Z or 26(26**0)
    // 31 = AD or 1*(26**1) + 4(26**0)
    // 4788 = GBD or 7(26**2) + 2*(26**1) + 4(26**0)
    // 37911 = BDBC or 2(26**3) + 4(26**2) + 2(26**1) + 3(26**0)
    
    let columnString = '';
    while(columnNumber > 0) {
        letterCode = columnNumber % 26 || 26;
        letter = String.fromCharCode(letterCode + 64);
        columnString = letter + columnString;
        columnNumber = (columnNumber - letterCode) / 26;
    }
    return columnString;
};
