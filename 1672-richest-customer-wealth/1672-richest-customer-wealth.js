/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((largest, account) => {
        const sum = account.reduce((acc,num) => acc+num)
        return largest > sum ? largest: sum;
    }, 0);
};
