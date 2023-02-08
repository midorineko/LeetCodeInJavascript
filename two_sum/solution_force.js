/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var submission = [];
    //start a first loop pulling all the numbers
    loop1: for(k = 0; k<nums.length; k++){
        currentInt = k;
        //second loop checks the loop again if target is met with summation of current value and different value
        loop2: for(i=currentInt+1; i<nums.length; i++){
            if(nums[currentInt] + nums[i] === target){
                submission.push(currentInt, i);
                break loop1;
            }
        }
    }
    return(submission)
};