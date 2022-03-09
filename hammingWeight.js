
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

 var hammingWeight = function(n) {
    let count = 0;
    n = n.toString(2);
    
    for(let i=0;i<n.length;i++){
        if(n[i]!=='1'){continue;}
            count++;
    }

    return count;
};

console.log("Count >>>> " + hammingWeight (00000000000000000000000000001011));
