var findTheDifference = function(s, t) {
    let map = {};

    for(let i of s){
        map[i] ? map[i]++ : map[i] = 1;
    }

    for(let i of t){
        if(map[i] > 0){
            map[i]--;
        }else{
            return i
        }
    }

    return '';
};

console.log(findTheDifference("abcd", "abcds"))