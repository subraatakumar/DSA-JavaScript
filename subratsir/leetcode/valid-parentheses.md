# Brute Force Code

```js
var isValid = function(s){
    let result = [];
    for(let i=0; i<s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['  ){
            result.push(s[i]);
        }else if(s[i] == ')' || s[i] == '}' || s[i] == ']'  ){
            let c = result[result.length-1];
            if((c == "(" && s[i] == ')' ) || (c == "{" && s[i] == '}' ) || (c == "[" && s[i] == ']' )){
                result.pop();
            }else{
		return false;
            }
        }
    }
    return result.length === 0
};
```

# Optimised Code

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 !== 0) return false;
    const stack = [];
    const map = new Map([
        ["(",")"],
        ["{","}"],
        ["[","]"]
    ])
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            // If the character exists in map keys
            // Then it is an open parenthesis
            // So get concern value (means closing parenthesis)
            // and push to stack
            stack.push(map.get(s[i]))
        }else if(s[i] !== stack.pop()){
            // if it is a closing parenthesis then
            // it should be equal to the last item of stack
            // If not then return false
            return false
        }
    }
    // at last there should not be any item in stack    
    return stack.length == 0
};
```

So, the time complexity is `O(n)` and space complexity is `O(n)` as well because in the worst-case scenario if we get a sequence with only opening characters `(({[([{{[(` we’ll push all of them to the `stack`.

