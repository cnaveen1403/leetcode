/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reversed = 0;

    let temp = Math.abs(x)

    while(temp){
        reversed = (reversed * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    reversed = x > 0 ? reversed : reversed * -1;

    return isInt (reversed) ? reversed : 0;
}

const isInt = function (num){
    const INT_MAX_POS = (2 ** 31) - 1;
    const INT_MAX_NEG = (2**31) * -1;

    return (num >= INT_MAX_NEG && num <= INT_MAX_POS);
}

console.log(reverse(12));