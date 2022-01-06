/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    var stepCount = 0;
    var waterLeft = capacity;
    plants.forEach((plant, idx) => {
        stepCount++;
        waterLeft -= plant;
        if(plants[idx+1] && waterLeft < plants[idx+1]) {
            waterLeft = capacity;
            stepCount += (idx+1)*2;
        }
    })
    return stepCount
};