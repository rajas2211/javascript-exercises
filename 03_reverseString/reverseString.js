const reverseString = function(string) {
    let stringArray = string.split("")
    let resultString = "";
    for(let i = 1; i<=stringArray.length; i++){
        resultString += stringArray.pop();
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
