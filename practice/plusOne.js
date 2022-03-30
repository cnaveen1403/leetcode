/**
 * @param {number[]} digits
 * @return {number[]}
 */

//  var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
 var digits = [9];

 var plusOne = function(digits) {
    
    // var str = digits.reduce((acc, curr) =>{
    //     return acc + curr;
    // }, "");

    // let temp = BigInt(str);
    // temp++;
    // let result = Array.from(String(temp), num => Number(num))
    // return result;

    //check from the last digit
    //if the current digit is 9 then make it 0 and increment previous 
    //number by 1 also check the previous number and perform increment

    let lastNumber = digits[digits.length - 1];

    if(lastNumber < 9)
        digits[digits.length - 1] ++;
    else{
        let currIndex = digits.length-1;
        while(digits[currIndex] == 9){
            digits[currIndex] = 0;
            currIndex--;
        }
        
        if(currIndex >= 0)
            digits[currIndex] ++;
        else
            digits.unshift(1)
    }

    return digits;
};

console.log(plusOne(digits));