
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
