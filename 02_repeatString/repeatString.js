const repeatString = function(string, numRepeat) {
    let outputString = "";
    for (let i=1; i<=numRepeat; i++){
        outputString += string;
    }
    return(outputString);
};

// Do not edit below this line
module.exports = repeatString;
