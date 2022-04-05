/**
 * @param {number[]} height
 * @return {number}
 */

var height = [1,8,6,2,5,4,8,3,7];

 var maxArea = function(height) {
    var start = 0;
    var end = height.length - 1;
    var result = 0;

    while(start < end){
        let diff = end - start;

        var shortest = Math.min(height[end], height[start]);
        result = Math.max(result, diff * shortest);

        if(shortest == height[end]){
            end --;
        }else{
            start ++;
        }
    }

    return result;
};

console.log(maxArea(height));