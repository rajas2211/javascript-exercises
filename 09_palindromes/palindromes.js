const palindromes = function (string) {
    string = string.replace(/[.,! ]/g,"");
    string = string.toLowerCase();
    // console.log(string);
    // string = string.split('');
    for(let i=0; i<Math.floor(string.length/2); i++){
        // console.log(`${string[i]}\t${string[string.length-i-1]}`)
        if(string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
