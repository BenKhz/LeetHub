
var MinStack = function() {
    this.storage = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.storage[this.storage.length] = val;
    // update min after every push.
    this.min = this.storage.reduce((acc, item) => acc < item ? acc : item )
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.storage.splice(this.storage.length-1)
    // update min after every pop.
    if(!this.storage.length) { this.min = undefined; }
    else {
        this.min = this.storage.reduce((acc, item) => acc < item ? acc : item )
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.storage.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */