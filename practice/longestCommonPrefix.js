/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "" 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.


*/

/**
 * @param {string[]} strs
 * @return {string}
 */

//SOLUTION 1 : horizontal scanning
 var longestCommonPrefixHorScan = function(strs) {
    let prefix = "";

    //if strs length is 0 - return empty string
    if (strs.length <= 1)
        return prefix;
    
    prefix = strs[0];
    for(var i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);

            if(prefix == "")
                return prefix;
        }
    }

    return prefix;
};

console.log(longestCommonPrefixHorScan (words));