const removeFromArray = function(array, ...elementsToRemove) {
    // console.log(arguments.length);
    for (let i=0; i<elementsToRemove.length; i++){
        if (array.indexOf(elementsToRemove[i]) === -1) {
            continue;
        }
        array.splice(array.indexOf(elementsToRemove[i]),1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
