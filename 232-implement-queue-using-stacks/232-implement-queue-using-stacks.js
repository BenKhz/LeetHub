var MyQueue = function() {
    this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storage.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.storage.splice(0,1);
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.storage[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.storage.length;
};
