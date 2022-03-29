/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var nums = [1, 3, 5, 6],
    target = 5;
var searchInsert = function (nums, target) {
    // i = 0;

    // while (target >= nums[i]){
    //     // console.log (nums[i])
    //     if(target == nums[i])
    //         return i;
    //     i++;
    // }

    // return i;

    var left = 0;
    var right = nums.length - 1;
    var pivot = 0;

    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] == target)
            return pivot;

        if (target < nums[pivot]) {
            right = pivot - 1;
        }else{
            left = pivot + 1;
        }
    }

    return left;
};

console.log(searchInsert(nums, target));