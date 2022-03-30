/**
 * @param {number[]} digits
 * @return {number[]}
 */

 var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

 var plusOne = function(digits) {
    
    var str = digits.reduce((acc, curr) =>{
        return acc + curr;
    }, "");

    let temp = BigInt(str);
    temp++;
    let result = Array.from(String(temp), num => Number(num))
    return result;
};

console.log(plusOne(digits));