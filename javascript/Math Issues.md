# Math Issues

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

- Math.round()
- Math.ceil()
- Math.floor()


# reply
```js
Math.round = function(number) {
  return number - parseInt(number) > 0.4?parseInt(number+1):parseInt(number);
};

Math.ceil = function(number) {
  return number%1 == 0?number:parseInt(number+1);
};

Math.floor = function(number) {
  return parseInt(number);
}
```
