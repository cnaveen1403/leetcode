// Solutions of Leetcode problems

// Q1) Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9

var countOdds = function(low, high) {
    let count = 0;

    // for (i = low ; i <= high; i++){
    //     if (!(i % 2) == 0)
    //         result ++
    // }

    if((low % 2 == 0) && (high%2 == 0)){
        count = (high - low )/2;
    }else{
        count = Math.floor((high - low)/2 + 1);
    }

    return count;
};

console.log(countOdds(3, 8));