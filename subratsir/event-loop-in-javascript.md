# What is an event loop in JavaScript ?

JavaScript is a single-threaded synchronous programming language. An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty. 

The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.

Whenever an async function is called, it is sent to a builtin browser API. The language itself is single-threaded, but the browser APIs act as separate threads.

The event loop constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue.

[explanation in details with example](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/notes/event-loop-explanation.md)

[learn more by reading a blog on medium](https://medium.com/gradeup/asynchronous-javascript-event-loop-1c8de41298dd)

[Home](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/README.md)
