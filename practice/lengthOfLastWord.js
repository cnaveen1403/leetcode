var lengthOfLastWord = function(s) {
    var arr = s.trim().split(" ");
    var str = arr[arr.length - 1];

    return str.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));