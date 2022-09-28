const caesar = function(string, shift) {
    let encrypted = Array();
    for(let i=0; i<string.length; i++){
        if(string[i].charCodeAt() >= 65 &&
           string[i].charCodeAt() <= (65+25)){
            encrypted.push(getShift(string[i], shift, 65));
        } else if(string[i].charCodeAt() >= 97 && 
                  string[i].charCodeAt() <= (97+25)){
            encrypted.push(getShift(string[i], shift, 97));
        } else {
            encrypted.push(string[i]);
        }
    }
    return encrypted.join("");
};

function getShift(character, shift, start){
    shift = parseInt(shift)%26;
    shiftCode = character.charCodeAt() + shift;
    if (shiftCode > start+25){
        shiftCode = (start - 1) + (shiftCode - (start + 25));
    }
    if (shiftCode < start){
        shiftCode = (start + 26) - (start - shiftCode);
    }
    return String.fromCharCode(shiftCode);
}

// Do not edit below this line
module.exports = caesar;
