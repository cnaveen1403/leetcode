/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var result = "";

    if(num == 0)
        return "0";

    if(num < 0){
        num += Math.pow(2, 32);
    }

    while(num > 0){
        var digit = num %16;
        result = arr[digit] + result;
        num = Math.floor(num/16);
    }

    return result;
};

console.log(toHex(-1))