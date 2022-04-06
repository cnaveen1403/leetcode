/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
    let count = 0;
    arr.sort((a, b) => a - b);

    for (let index = 0; index < arr.length; index++) {
        let j = index + 1;
        let k = arr.length - 1;

        while (j < k) {
            let sum = arr[index] + arr[j] + arr[k];
            if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            } else {
                if(arr[j] !== arr[k]){
                    let j1 = j, k1 = k;
                    while(arr[j] === arr[j1]){
                        j1++;
                    }

                    while (arr[k] === arr[k1]){
                        k1--;
                    }

                    count += ((j1-j) * (k-k1));
                    j = j1;
                    k = k1;
                }else{
                    for (let n = 1; n <= k-j; n++){
                        count += n;
                    }

                    break;
                }
            }
        }
    }

    return count%(10**9 + 7);
};

var arr = [1,1,2,2,3,3,4,4,5,5], target = 8;
console.log(threeSumMulti(arr, target));