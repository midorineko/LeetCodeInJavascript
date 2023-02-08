/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    //this is sliding window technique
    var wEnd = 0;
    var wStart = 0;
    var max = 0;
    var map = {};

    for(wEnd; wEnd < s.length; wEnd++){
        //set the right character, which is the character we are currently on. This is the end of the sliding window.
        rightChar = s[wEnd];
        //adds right character to hash with a value of 1, unless there is a dupe then we add 1.
        map[rightChar] = map[rightChar] + 1 || 1;

        //makes sure we only have one instance of the current value.
        while(map[rightChar] > 1){
            //sets left character using wStart to find which character we currently are at in the start of the sliding window.
            leftChar = s[wStart];
            //since we are inside the wile we know there is a dupe because the current character we are on is 2.
            //if the curernt starting character isn't great than 1 we know that this isn't the dupe and we have to keep sliding the start of the window until we get to the dupe
            if(map[leftChar] > 1){
                //if the left character has a value of 2 then we are on the dupe. We subtract one because the value at the end of the window is still there.
                map[leftChar]--;
            }else{
                //else the left character is one and the dupe is farther into the window from the start and we just need to delete this value from the hash.
                delete map[leftChar];
            }
            //increments wStart which needs to be done no matter if character is deleted or not.
            //when while loop ends wStart does not equal wEnd. The window start is now the next value past the dupe.
            wStart++;
        }
        //use this to find out if our length is greater than the current max length and sets it if it is.
        //by subtracting the end position from the start position we get the current length. We add one because they are indexes which start at 0 and we want to start at 1.
        max = Math.max(max, (wEnd - wStart) + 1);
    }
    return max
};