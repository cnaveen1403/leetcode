var lengthOfLongestSubstring = function(s) {
    const length = s.length;

    let res = 0;

    for(var i =0; i< length; i++){
        let set = new Set();
        let right = i;

        while(!set.has(s[right])){
            set.add(s[right]);
            right++
        }

        res = Math.max(res, s.slice(i, right).length);
    }

    return res;
};


var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));