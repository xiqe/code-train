# Next bigger number with the same digits

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
```
12 ==> 21
513 ==> 531
2017 ==> 2071
```
If no bigger number can be composed using those digits, return -1:
```
9 ==> -1
111 ==> -1
531 ==> -1
```

# reply
```js
function nextBigger(n){
  let str = String(n),len=str.length;
  if(len == 1)return -1;
  function getIndex(i){
    if(str[i-1]<str[i]){
      let arr = str.slice(i-1).split('').sort();
      let index = [...new Set(arr)].indexOf(str[i-1]) + 1,
          item = [...new Set(arr)][index];
      arr.splice(arr.indexOf(item),1);
      arr.unshift(item);
      return + (str.slice(0,i-1) + arr.join(''));
    } else {
      if(i == 1){return -1}else{return getIndex(i-1)};
    }
  }
  return getIndex(len-1);
}
```
