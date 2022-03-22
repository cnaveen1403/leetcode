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
// var longestCommonPrefixHorScan = function (strs) {
//     let prefix = "";

//     //if strs length is 0 - return empty string
//     if (strs.length <= 1)
//         return prefix;

//     prefix = strs[0];
//     for (var i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length - 1);

//             if (prefix == "")
//                 return prefix;
//         }
//     }

//     return prefix;
// };

var words = ["flower", "flow", "flight"];
// console.log(longestCommonPrefixHorScan (words));

//Approach 2: Vertical scanning

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefixVertScan = function (strs) {

//     if (strs.length <= 0)
//         return "";

//     for (var i = 0; i < strs[0].length; i++) {

//         let c = strs[0].charAt(i);

//         for (var j = 1; j < strs.length; j++) {
//             if (i == strs[j].length || strs[j].charAt(i) != c) {
//                 return strs[0].substring(0, i);
//             }
//         }

//     }

//     return strs[0];
// };

// console.log(longestCommonPrefixVertScan (words));

// Approach 3: Divide and conquer

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixDivideAndConquer = function (strs) {
    if (strs.length <= 0)
        return "";

    return commonPrefix(strs, 0, strs.length - 1);
};

function commonPrefix(arr, low, high) {
    if (low == high)
    {
        return (arr[low]);
    }
 
    if (high > low)
    {
         
        // Same as (low + high)/2, but avoids
        // overflow for large low and high
        let mid = low + Math.floor((high - low) / 2);
 
        let str1 = commonPrefix(arr, low, mid);
        let str2 = commonPrefix(arr, mid + 1, high);
 
        return (commonPrefixUtil(str1, str2));
    }
    return "";
}

function commonPrefixUtil(left, right) {
    let result = "";
    let n1 = left.length, n2 = right.length;
 
    for(let i = 0, j = 0; i <= n1 - 1 &&
            j <= n2 - 1; i++, j++)
    {
        if (left[i] != right[j])
        {
            break;
        }
        result += left[i];
    }
    return (result);
}

console.log(longestCommonPrefixDivideAndConquer(words));