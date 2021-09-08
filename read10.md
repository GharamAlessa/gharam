# In memory storage
![](https://jsonworld.com/images/localstorage-reactjs-app.png)


## The JavaScript Call Stack
## What is a ‘call’?

> a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

### How many ‘calls’ can happen at once?

> It is single-threaded. Meaning it can only do one thing at a time.

### What does LIFO mean?

> Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.



### What causes a Stack Overflow?

> A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accommodate before throwing a stack error.

## JavaScript error messages && debugging
### What is a ‘refrence error’?

> when you try to use a variable that is not yet declared you get this type os errors.

### What is a ‘syntax error’?

> this occurs when you have something that cannot be parsed in terms of syntax

### What is a ‘range error’?

> Try to manipulate an object with some kind of length and give it an invalid length.

### What is a ‘tyep error’?

> this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible.

### What is a breakpoint?

> breakpoint is an intentional stopping or pausing place in a program, put in place for debugging purposes.

### What does the word ‘debugger’ do in your code?

> + used to identify coding errors at various development stages.
> + They are used to reproduce the conditions in which error has occurred, then examine the program state at that time and locate the cause. 
> + Programmers can trace the program execution step-by-step by evaluating the value of variables and stop the execution wherever required to get the value of variables or reset the program variables.
##### Read more
+ [Understanding the JavaScript Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)
+ [JavaScript error messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c?gi=c85566901ef)
