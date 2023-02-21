/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let ti;
    if(target < nums[0]) return 0
    nums.forEach((x, i)=>{
        if(target === x){
            return ti = i;
        }else if(x  < target && !nums[i + 1]){
            return ti = i + 1;
        }else if(x  < target && target < nums[i+1]){
            return ti = i + 1;
        }
    })
    return ti
};

// var searchInsert = function(nums, target) {
//     let mi = 0;
//     let ma = nums.length - 1;
//     if(target < nums[mi]) return mi
//     if(target > nums[ma]) return ma+1
//     while(mi < ma || counter >= 100){
//         if(target > nums[mi]){
//             mi++;
//         }
//         if(target < nums[ma]){
//             ma--;
//         }
//         counter++
//     }
//     return mi
// };