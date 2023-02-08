/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var valsObj = {};
    number = []
    for(k = 0; k<nums.length; k++){
        currentInt = k;
        curVal = nums[currentInt];
        valToCheck = target - curVal;
        if(valsObj[curVal] !== undefined){
            number.push(valsObj[curVal], currentInt)
        }
        valsObj[valToCheck] = k;
    }
    return(number)
};