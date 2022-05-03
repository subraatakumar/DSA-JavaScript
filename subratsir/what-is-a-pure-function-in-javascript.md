# What is a pure function in Javascript ?

Pure Function in Javascript is a function that always returns the same result if the same arguments are passed. It does not depend on any state, or data change during a programs's execution. It only depends on it's input arguments.

If a pure function calls another pure function, It isn't a side effect. Still the calling function is considered as a pure function. Example: using Math.max() inside a function.

Below are some of the side effects those a pure function should not produce.

- Making a HTTP request
- Mutating data
- Printing to a screen or console
- DOM query / manipulation
- Math.random()
- Getting the current time.


