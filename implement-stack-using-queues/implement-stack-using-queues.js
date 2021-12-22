var MyStack = function() {
    this.size = 0;
    this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.size++;
    this.storage.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.empty()) { return }
    this.size--;
    var count = this.size;
    var tempArr = [];
    while(count){
        tempArr.unshift(this.storage.pop())
        count--;
    }
    var result = this.storage.pop()
    this.storage = tempArr;
    return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.empty()) { return }
    var count = this.size - 1;
    var tempArr = [];
    while(count){
        tempArr.unshift(this.storage.pop())
        count--;
    }
    var result = this.storage[count];
    tempArr.unshift(this.storage.pop())
    this.storage = tempArr;
    return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.size === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */