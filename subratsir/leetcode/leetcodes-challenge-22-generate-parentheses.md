```js
const generateParentheses = (n) => {
  const result = [];
  breathFirstSearch("", 0, 0);
  return result;
  function breathFirstSearch(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      breathFirstSearch(str + "(", left + 1, right);
    }
    if (left > right) {
      breathFirstSearch(str + ")", left, right + 1);
    }
  }
}
```

Credit: https://medium.com/@chyanpin/solving-leetcodes-challenge-22-generate-parentheses-2ba613397c06
