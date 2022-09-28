/*jshint esversion: 6 */

const reverseString = function(string) {
    const stringArray = string.split("");
    const stringLength = stringArray.length;
    //Using stringArray.length in for loop will make it dynamic
    let resultString = "";
    for(let i = 0; i < stringLength; i++){
        // console.log(stringArray.length);
        resultString += stringArray.pop();
        // console.log(resultString);
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
