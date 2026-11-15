const reverseString = function(inputString) {
    let outString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        outString += inputString[i];
    }
    return outString;
};

// Do not edit below this line
module.exports = reverseString;
