/**
 * @param {string} s
 * @return {number}
 */
const checkArrForDupes = (arr) =>{
    //loops through a single array and checks for dupes, by splicing out current value and checking the rest of values for dup
    for(i=0; i<arr.length; i++){
        letter = arr[i]
        arrCheck = [...arr]
        arrCheck.splice(i, 1)
        if(arrCheck.includes(letter)){
            return false;
        }
    }
    return true;
}

var lengthOfLongestSubstring = function(s) {
    a=s.split("")
    b = [...a]
    c = [...a]
    let longestLength = 0
    //runs through all the values of s
    a.forEach(()=>{
        loopCount = b.length
        //checks for dupes shrinking the array we are checking from the left using pop. Sets longest length if it is longer than the current. 
        while(loopCount > 0){
            if(checkArrForDupes(b) && longestLength < b.length){
                longestLength = b.length
            }
            b.pop()
            loopCount--;
        }
        //shifts one value off the front of the array to check substring moving from the right. Adds to longest length if it is.
        c.shift();
        b = [...c]
        if(checkArrForDupes(c) && longestLength < b.length){
            longestLength = b.length
        }
    })
    return(longestLength)
};