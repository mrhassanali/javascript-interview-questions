# JavaScript Interview Questions

### What are the difference between relative path and absolute path?

- A relative path describes the location of a file relative to the current (working) directory.
- An absolute path describes the location from the root directory.

### What are the data types in JavaScript?

JavaScript has several data types. Here's a brief overview:

#### 1.1 Primitive Types

- **String**: Represents textual data, e.g., `'hello'`.
- **Number**: Represents both integer and floating-point numbers, e.g., `42` or `3.14`.
- **BigInt**: Represents integers with arbitrary precision, e.g., `9007199254740991n`.
- **Boolean**: Represents a logical entity and can have two values: `true` and `false`.
- **Undefined**: Represents a variable that has not been assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: Represents a unique identifier.

#### 1.2 Object Types

- **Object**: The most basic structure for storing data in key-value pairs, e.g., `{ name: 'John', age: 30 }`.
- **Array**: A global object used to store a list of elements, e.g., `[1, 2, 3]`.
- **Function**: JavaScript functions are first-class objects, meaning they can have properties and methods just like any other object.

These data types are the building blocks for coding in JavaScript, allowing developers to manipulate values and create complex data structures and logic.

### What is the difference between null and undefined in JavaScript?

In JavaScript, `null` and `undefined` both represent absence of value, but in different ways:

- **`undefined`** is a type itself (undefined) and is the default value of a variable that has been declared but not initialized or assigned a value. It's also the value returned by functions that do not explicitly return anything.

- **`null`** is an assignment value. It can be assigned to a variable as a representation of no value. Unlike `undefined`, `null` is an object. It's used to intentionally denote that a variable is meant to be "empty" or "unknown".

In **Summary**, `undefined` typically means a variable has been declared but not defined, while `null` is used to intentionally indicate that a variable should have no value. They are both falsy values but are not strictly equal to each other (`null !== undefined`).

### What is the difference between == and === in JavaScript?

| Operator | Type            | Description                                                                                                       |
| -------- | --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `=`      | Assignment      | Assigns a value to a variable.                                                                                    |
| `==`     | Equality        | Compares two values for equality, performing type coercion if necessary.                                          |
| `===`    | Strict Equality | Compares two values for equality, without performing type coercion. Requires both value and type to be identical. |

### What is the difference between let, var, and const in JavaScript?

- **`var`**:

  - Function-scoped or globally-scoped.
  - Can be re-declared and updated.
  - Hoisted to the top of its scope and initialized with `undefined`.

- **`let`**:

  - Block-scoped.
  - Can be updated but not re-declared within the same scope.
  - Not initialized until their definition is evaluated.

- **`const`**:
  - Block-scoped.
  - Cannot be updated or re-declared.
  - Must be initialized at the time of declaration.

| Feature                 | `var`                             | `let`                         | `const`                       |
| ----------------------- | --------------------------------- | ----------------------------- | ----------------------------- |
| Scope                   | Function or global                | Block                         | Block                         |
| Re-declaration          | Allowed in the same scope         | Not allowed in the same scope | Not allowed in the same scope |
| Update                  | Allowed                           | Allowed                       | Not allowed                   |
| Hoisting                | Yes, initialized with `undefined` | No, Temporal Dead Zone (TDZ)  | No, Temporal Dead Zone (TDZ)  |
| Initialization Required | No                                | No                            | Yes, at declaration           |

### What is Temporal Dead Zone?

The Temporal Dead Zone (TDZ) refers to the period between entering the scope where the variable is declared and the actual declaration and initialization of that variable. During this time, the variable is in a "dead zone" where it cannot be accessed or used.

For variables declared with `let` and `const` in JavaScript:

- **Entering Scope**: When the execution enters a block or a function where a `let` or `const` variable is declared, the variable is in scope but not yet declared.
- **Before Declaration**: If you try to access the variable before its declaration line, JavaScript throws a `ReferenceError` because the variable is in the TDZ.
- **After Declaration**: Once the execution reaches the variable declaration and initialization, the variable is no longer in the TDZ and can be safely accessed and used.

The TDZ is a mechanism to prevent errors and make the code more predictable by ensuring variables cannot be accessed until they are declared and initialized, contrasting with `var` declarations, which are hoisted to the top of their scope and can be accessed (with `undefined` value) before their declaration line in the code.

### What is `async/await`?

`async/await` is used to perform the asynchronous task on JavaScript because the JavaScript is single threaded language and i block the code until the complete operation. But `async/await` not block the code.

### Use Cases:

- **Fetching Data**: When you need to fetch data from an API and wait for the data to be fetched before proceeding.
- **File Operations**: Reading/writing files in Node.js, where operations are asynchronous.
- **Database Queries**: Waiting for a database query to complete before moving on to the next step in your code.

`async`/`await` simplifies working with asynchronous operations, making your code cleaner and easier to understand.

### What is the event loop in JavaScript?

The event loop is a fundamental concept in JavaScript that allows it to perform non-blocking, asynchronous operations despite being single-threaded. Here's a simplified explanation:

1. **JavaScript Runtime Model**: JavaScript has a call stack, an event queue, and a heap. The call stack is where the JavaScript engine keeps track of what functions are being called. The heap is for memory allocation, and the event queue is where events are queued before being processed.

2. **Call Stack**: When a script calls a function, the JavaScript engine puts it on the call stack and executes it. If that function calls another function, the engine places the second function on top of the first one on the stack and executes it, and so on.

3. **Blocking**: If a function takes a long time to execute (e.g., a complex calculation or synchronous I/O operations), it can block the call stack, making the web page unresponsive.

4. **Event Loop**: To prevent blocking, JavaScript uses the event loop. The event loop looks at the call stack and the event queue. If the call stack is empty (i.e., no functions are currently running), it takes the first event from the queue and pushes it to the call stack, which effectively runs the event's callback function.

5. **Non-Blocking with Callbacks, Promises, and async/await**: For operations like I/O, network requests, and timers, JavaScript uses APIs provided by the browser or Node.js environment. These operations are executed outside of the JavaScript engine. Once an operation completes, its callback is placed in the event queue. The event loop then processes these callbacks when the call stack is empty, allowing JavaScript to perform non-blocking operations.

6. **Microtasks and Macrotasks**: The event loop gives priority to microtasks (promises, `process.nextTick` in Node.js) over macrotasks (`setTimeout`, `setInterval`, I/O). After each task from the call stack, the event loop checks if there are any microtasks and executes them before moving on to the next macrotask.

In summary, the event loop enables JavaScript to handle asynchronous operations, timers, and I/O in a non-blocking way, making it possible to build responsive applications despite JavaScript's single-threaded nature.

### What is a closure in JavaScript?

A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables—a scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

### How Closures Work:

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    // This inner function has access to the outerVariable, its own innerVariable, and global variables
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside"); // Logs: Outer Variable: outside, Inner Variable: inside
```

In this example, `innerFunction` is a closure that has access to `outerVariable` from `outerFunction`, even after `outerFunction` has finished execution.

### Use Cases for Closures:

1. **Data Encapsulation**: Closures can be used to create private variables or functions that cannot be accessed from the outside, thus encapsulating the data.

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
```

2. **Currying and Function Factories**: Closures allow for the creation of function factories and currying, which are techniques to create dynamically generated functions based on some initial parameters.

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

3. **Event Handlers and Callbacks**: They enable the use of event handlers and callbacks with private data. A closure can be used to associate a function with a set of data, making it powerful for event handling.

```javascript
function setupAlertOnClick(elementId, message) {
  document.getElementById(elementId).addEventListener("click", function () {
    alert(message);
  });
}

setupAlertOnClick("myButton", "Button clicked!");
```

4. **Module Pattern**: Before ES6 modules, closures were used to create modules by encapsulating a set of functions and variables to expose only public methods and properties while keeping others private.

```javascript
var myModule = (function () {
  var privateVar = "I am private";
  return {
    publicMethod: function () {
      console.log("Accessing: " + privateVar);
    },
  };
})();

myModule.publicMethod(); // Accessing: I am private
```

Closures are a fundamental and powerful feature of JavaScript, enabling various design patterns and techniques that enhance encapsulation, data privacy, and functional programming concepts.

### What is the difference between map and forEach in JavaScript?

- **`map`**:

  - Returns a new array containing the results of applying a function to each element of the original array.
  - Does not modify the original array.
  - Ideal for transformations or computations where the results are collected.
  - Can be chained with other array methods like `.filter()`, `.reduce()`, etc.

- **`forEach`**:
  - Executes a provided function once for each array element.
  - Does not return anything (`undefined`).
  - Can modify the original array within the callback function.
  - Used for executing side effects for each element in the array.

### What is the difference between a mutable and immutable object in JavaScript?

- **Mutable Object**:

  - Can be changed or modified after it's created.
  - Operations on the object can alter its properties or contents without creating a new object.
  - Examples include objects created with `Object`, `Array`, `Function`, etc., where you can change properties, elements, or function properties after creation.

- **Immutable Object**:
  - Cannot be changed or modified once it's created.
  - Any operation that intends to change the object will result in a new object with the desired changes, leaving the original object untouched.
  - Primitive data types (like `Number`, `String`, `Boolean`) are immutable by default in JavaScript.
  - Libraries like Immutable.js provide immutable data structures (e.g., List, Map) that enforce immutability for complex objects.

### How to error handling in the javascript?

Error handling in JavaScript can be achieved through several mechanisms, including `try...catch` blocks, error handling in Promises, and using `async`/`await` with `try...catch`. Here's a summary:

### Using `try...catch`:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of try / catch outcome
}
```

- **`try` block**: Wrap the code that might throw an error.
- **`catch` block**: Execute if an error occurs in the try block. It receives the error object.
- **`finally` block**: (Optional) Execute after try/catch, regardless of whether an error was thrown or caught.

### Error Handling in Promises:

```javascript
doSomethingAsync()
  .then((result) => {
    // Handle successful result
  })
  .catch((error) => {
    // Handle error
  });
```

- **`.then()`**: For handling successful resolution of the Promise.
- **`.catch()`**: For catching and handling errors or rejections from the Promise.

### Using `async`/`await` with `try...catch`:

```javascript
async function asyncFunction() {
  try {
    const result = await doSomethingAsync();
    // Handle successful result
  } catch (error) {
    // Handle error
  }
}
```

- **`async` function**: Indicates that the function can use the `await` keyword.
- **`await`**: Pauses the function execution until the Promise resolves.
- **`try...catch`**: Used to catch errors from the awaited Promise.

### Best Practices:

- **Throwing Errors**: Use `throw new Error('message')` to generate custom error messages.
- **Custom Error Types**: Extend the Error class to create custom error types for better error handling.
- **Error Propagation**: Allow errors to propagate to a level where they can be handled appropriately, rather than catching and ignoring them.

Error handling is crucial for creating robust JavaScript applications, allowing you to gracefully handle exceptions and maintain a good user experience.

### What is the difference between a spread operator and a rest parameter in JavaScript?

- **Spread Operator (`...`)**:

  - Used to expand or spread an iterable (like an array, string, or object) into individual elements or properties.
  - Commonly used in function calls, array literals, and object literals.
  - Can be used to make shallow copies of objects or arrays, merge objects or arrays, and spread elements in array or object literals.

- **Rest Parameter (`...`)**:
  - Allows a function to accept an indefinite number of arguments as an array.
  - Used in the function declaration to gather arguments into an array.
  - Provides a way to handle function parameters more flexibly, enabling functions to accept any number of arguments.

### What is the output of the code snippet below?

```javascript
let str = "Hello World!";
let split = str.split(" ");
for (var i = 0; i < split.length; i++) {
  console.log(split[i]);
}
```

**Answer**

```javascript
Hello
World!
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // ans: 15
```

### What is the output of the code snippet below?

```javascript
let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
console.log(keys); // ans : ["a", "b", "c"]
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let filtered = arr.filter((num) => num % 2 === 0);
console.log(filtered); // ans : [2,4]
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let mapped = arr.map((num) => num * 2);
console.log(mapped); // ans : [2, 4, 6, 8, 10]
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);
console.log(sliced);
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let reversed = arr.reverse();
console.log(reversed);
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let sorted = arr.sort((a, b) => b - a);
console.log(sorted);
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let joined = arr.join("-");
console.log(joined);
```

### What is the output of the code snippet below?

```javascript
let arr = [1, 2, 3, 4, 5];
let popped = arr.pop();
console.log(popped);
```

An absolute path describes the location from the root directory.
