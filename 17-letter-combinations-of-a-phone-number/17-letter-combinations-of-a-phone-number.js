/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const phone =  {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: ['g','h','i'],
      5: ['j','k','l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z'],
      }
  digits = digits.split('');
  makeCombos = (digits, lastComboArray) => {
    if(!digits.length) { return lastComboArray }
    let newCombos = [];
    let digit = digits[0];
    digits = digits.splice(1);
    for(let letter of phone[digit]) {
      if(!lastComboArray.length) { newCombos.push(letter) }
      else{
        for(let combo of lastComboArray) {
          newCombos.push(combo + letter)
        }
      }
    }
    return makeCombos(digits, newCombos)
  }
  return makeCombos(digits, [])
};