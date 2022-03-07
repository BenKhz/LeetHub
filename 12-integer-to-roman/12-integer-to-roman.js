/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let count = num;
    let map = [
        {rom: 'I', val:1},
        {rom: 'IV', val:4},
        {rom: 'V', val:5},
        {rom:'IX', val:9},
        {rom:'X', val:10},
        {rom:'XL', val:40},
        {rom:'L', val:50},
        {rom:'XC', val:90},
        {rom:'C', val:100},
        {rom:'CD', val:400},
        {rom:'D', val:500},
        {rom:'CM', val:900},
        {rom:'M', val:1000},
        ];
    
    while(count) {
        for(var i = map.length-1; i>=0; i--){
            if(count >= map[i].val) {
                result += map[i].rom;
                count -= map[i].val;
                break;
            }
        }
    }
    return result;
};