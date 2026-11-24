/*
# Exercise 04 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

If the function receives invalid arguments (such as negative numbers, non-integers, strings etc. - anything other than positive integers), it should return the string `'ERROR'`.

## Hints

- How will you ensure you're summing all integers within the correct range, no matter the order of the inputs?
- Think about your sum's starting value. Then, how can you make sure every single number from the smaller input to the larger one (including both) gets added to it?
*/

const sumAll = function(min, max) {
    let sum = 0;
    if (min > max) {
        [min,max] = [max,min]
    }

    if (typeof min !== "number" || min < 0 || !Number.isInteger(min) || typeof max !== "number" || max < 0 || !Number.isInteger(max)) {
        return "ERROR";
    }

    for (let i = min; i<= max; i++) {
        //console.log(i);
        sum += i;
    }
    return sum;
};

//console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
