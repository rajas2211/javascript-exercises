const fibonacci = function(nthTerm) {
    nthTerm = parseInt(nthTerm);
    if(nthTerm <= 0){
        return "OOPS";
    }
    if(nthTerm === 1 || nthTerm === 2){
        return 1;
    }
    return fibonacci(nthTerm-1) + fibonacci(nthTerm-2);
};

// Do not edit below this line
module.exports = fibonacci;
