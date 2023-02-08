/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var valsObj = {};
    number = []
    //loops through all the numbers in array
    for(k = 0; k<nums.length; k++){
        currentInt = k;
        //pulls current val from nums and creates a valToCheck, which will be looked for in the hash
        curVal = nums[currentInt];
        valToCheck = target - curVal;
        //if the hash has the valToCheck the problem is solved and we can grab the index from the hash and the second index is currentInt
        if(valsObj[curVal] !== undefined){
            number.push(valsObj[curVal], currentInt)
        }
        //set up hash map where the values we are looking for are the key and their index in the array is the value
        valsObj[valToCheck] = k;
    }
    return(number)
};