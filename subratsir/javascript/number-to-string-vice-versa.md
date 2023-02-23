We know React Native Async Storage stores key pair values and the value should be a string.

Let a = 5;

we want to store the value of a then definitely we have to convert it to string. As per my knowledge below are different techniques to convert this number to a string.

- ""+a // Concatinate with a string
- a.toString() // use toString() function
- `${a}` // using back ticks

Similarly while retrieving values again we have to convert from string to number.

let b = "10"

This we can convert to number using below techniques:
- +b // prefixinf plus sign
- Number(b)
- parseInt(b)
- b*1 // multiply by number
- ~~b // double bitwise negation
- 
