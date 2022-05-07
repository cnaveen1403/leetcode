

var letterCombinations = function(digits) {
    if(!digits)
        return []
        
    var obj = {2:'abc', 3:"def",4:"ghi",5:"jkl" ,6:"mno",7:"pqrs",8:"tuv",9:"wxyz"}
    const getAllCombinations = (digits) =>{
        if(digits.length == 1)
            return obj[digits[0]].split("");

        const firstDigit  = obj[digits[0]]
        const combinations = getAllCombinations(digits.substring(1))
        const result = [];

        for(let i = 0; i< firstDigit.length; i++){
            for(let j=0; j < combinations.length; j++){
                result.push(firstDigit[i] + combinations[j])
            }
        }

        return result
    }

    return getAllCombinations(digits);
}

console.log(letterCombinations("23"));