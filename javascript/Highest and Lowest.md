# Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

```js
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

# Reply
```js
//method 1:
highAndLow = str => {
    const arr = str.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

//method 2:
highAndLow = str => {
    const arr = str.split(' ').map(Number);
    return `${Math.max.apply(null,arr)} ${Math.min.apply(null,arr)}`
}
```
