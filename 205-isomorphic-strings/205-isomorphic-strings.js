/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function isomorphic(s,t) {
        let seen = {}
        for(let i = 0; i < s.length; i++) {
            if(s[i] in seen) {
                if(seen[s[i]] !== t[i]) {
                    return false
                }
            } else {
                seen[s[i]] = t[i]
            }
        }
        return true
    }
    return isomorphic(s,t) && isomorphic(t,s)
};