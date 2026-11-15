const repeatString = function(inputString, count) {
    if (count < 0) {
        return 'ERROR';
    }
    let outString = "";
    for (let i = 0; i< count; i++) {
        outString += inputString;
    }
    return outString;

    return outString
};

// Do not edit below this line
module.exports = repeatString;
