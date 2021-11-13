/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   // charCodes {} 123 /125 [] 91/93 () 40/41
    var keys = {
        '123': 125,
        '91': 93,
        '40': 41
        }
    var track = [];
    var charArray = s.split('').map(char => char.charCodeAt());
    for(var char of charArray){
        if(char === 40 || char === 91 || char === 123) {
            track.push(char)
        }
        if(char === keys[40] || char === keys[91] || char === keys[123]) {
            if(char !== keys[track.pop()]) {
                return false;
            }
        }
    }return track.length > 0 ? false : true
};
