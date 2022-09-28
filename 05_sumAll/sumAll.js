const sumAll = function(start, end) {
    let sum = 0;
    if(!Number.isInteger(start) || !Number.isInteger(end) ||
       start < 0 || end < 0){
        return "ERROR";
    }
    if (start > end){
        const swap = end;
        end = start;
        start = swap;
    }
    for (let i=start; i<=end; i++) {
        sum += i;
    }
    return(sum)

};

// Do not edit below this line
module.exports = sumAll;
