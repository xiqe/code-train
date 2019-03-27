# Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

### Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

# reply
```js
// method 1:
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// method 2:
function countPositivesSumNegatives(input) {
    let n=0,sum=0;
    if(!input || input.length == 0) return [];
    input.forEach(x=>{(x>0)?n++:sum+=x;})
    return [n,sum];
}
```
