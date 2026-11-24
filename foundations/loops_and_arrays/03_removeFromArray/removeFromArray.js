
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// // TONY needs to do this one!
const removeFromArray = function(input, ...toRemove) {
    let output = [];
    for (elem of input) {
        if (!toRemove.includes(elem)) {
            output.push(elem)
        }
    }
    return output;
};

out = removeFromArray([1, 2, 3, 4], 3);
console.log(out);

// Do not edit below this line
module.exports = removeFromArray;
