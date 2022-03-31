/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    //Initialise result 
    var result = "";

    //initialise digit sum
    var sum = 0;

    //Traverse both strings starting from last character
    var i = a.length-1, j = b.length-1;
    while(i >= 0 || j >=0 || sum == 1){
        //compute sum of last digits and carry
        sum += ((i >= 0 ) ? a.charAt(i).charCodeAt(0) - "0".charCodeAt(0) : 0);
        sum += ((j >= 0 ) ? b.charAt(j).charCodeAt(0) - "0".charCodeAt(0) : 0);

        //if current digit sum it 1 or 3 add 1 to result
         result = String.fromCharCode(parseInt(sum%2) + "0".charCodeAt(0)) + result;

        //compute carry
        sum = parseInt(sum/2);

        //move to next digits
        i--, j--;
    }

    return result;
};

console.log(addBinary("11", "1"));