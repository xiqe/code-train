# Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
```
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered
```
Input strings s1 and s2 are null terminated.

### Examples
```js
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

# reply
```js
//method 1:
function scramble(str1, str2) {
    var count = {};
    str1.split('').forEach(x=>{
      count[x] = (count[x] || 0) + 1;
    })
    return str2.split('').every(x=>{
        return count[x]--;
    });
}

//method 2:
function scramble(str1,str2){
  return str2.split('').every(x=>{
    let index = str1.indexOf(x);
    if(index < 0)return false;
    str1 = str1.substring(0,index) + str1.substring(index+1);
    return true;
  })
}
```
