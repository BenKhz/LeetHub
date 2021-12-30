/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = (ip) => ip.replaceAll(".", "[.]");