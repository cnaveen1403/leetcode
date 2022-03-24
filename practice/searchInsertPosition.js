/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var nums = [1,3,5,6], target = 5;
 var searchInsert = function(nums, target) {
    i = 0;

    while (target >= nums[i]){
        // console.log (nums[i])
        if(target == nums[i])
            return i;
        i++;
    }

    return i;
};

console.log(searchInsert(nums, target));