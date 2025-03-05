## `NodeList` and `HTMLCollection`

Both are array-like objects that represent collections of DOM elements.

### 1. **Type of Elements**

- **`NodeList`**: Can contain any type of nodes (e.g., element nodes, text nodes, comment nodes).
- **`HTMLCollection`**: Only contains element nodes (`HTMLElement` objects).

### 2. **Methods and Properties**

- **`NodeList`**: Has fewer methods, but `NodeList` (from `querySelectorAll`) supports `forEach()`.
- **`HTMLCollection`**: Has more specific methods like `namedItem()`, which allows access by `id` or `name` attribute.

### 3. **Live vs. Static**

- **`NodeList`**:
  - If returned by `querySelectorAll()`, it is **static** (does not update automatically).
  - If returned by `childNodes`, it is **live** (updates when DOM changes).
- **`HTMLCollection`**: Always **live**, meaning it updates when the DOM changes.

### 4. **How They Are Obtained**

- **`NodeList`**:
  - Obtained via `document.querySelectorAll()`, `childNodes`, etc.
- **`HTMLCollection`**:
  - Obtained via `document.getElementsByTagName()`, `document.getElementsByClassName()`, etc.

### Example:

```javascript
// NodeList (Static)
let nodeList = document.querySelectorAll("p");
console.log(nodeList.length); // Does not change even if new <p> elements are added

// HTMLCollection (Live)
let htmlCollection = document.getElementsByTagName("p");
console.log(htmlCollection.length); // Updates if new <p> elements are added
```

### **Which One to Use?**

- Use **`querySelectorAll()`** (`NodeList`) when you don’t need live updates.
- Use **`getElementsByTagName()` / `getElementsByClassName()`** (`HTMLCollection`) if you want automatic updates when elements are added or removed.

### Key:

1. NodeList supports forEach(), but HTMLCollection does not.
2. NodeList is array-like and has a forEach() method.
3. HTMLCollection does not have forEach(), so you must convert it into an array first.

## innerHTML vs innerText

`innerHTML` and `innerText` are both properties in JavaScript that are used to access or modify the content of HTML elements, but they serve different purposes:

1. **`innerHTML`:**

   - This property retrieves or sets the HTML markup (including HTML tags) inside an element.
   - When you use `innerHTML`, it includes any HTML structure, such as `<b>`, `<i>`, or even `<div>` tags.
   - It's useful when you want to work with HTML content, including formatting and nested elements.

   **Example:**

   ```html
   <div id="myDiv"><strong>Hello</strong> World!</div>
   ```

   ```javascript
   let content = document.getElementById("myDiv").innerHTML;
   console.log(content); // Outputs: <strong>Hello</strong> World!
   ```

2. **`innerText`:**

   - This property retrieves or sets only the **text content** inside an element, excluding any HTML tags.
   - It gives you the "rendered" text as it appears to the user, which can be affected by CSS (like `display: none`).
   - It’s mainly used when you want to work with just the plain text without any HTML markup.

   **Example:**

   ```html
   <div id="myDiv"><strong>Hello</strong> World!</div>
   ```

   ```javascript
   let content = document.getElementById("myDiv").innerText;
   console.log(content); // Outputs: Hello World!
   ```

### Key Differences:

- **HTML vs. Text:** `innerHTML` returns everything, including HTML elements, while `innerText` gives you just the visible text.
- **Rendering and Formatting:** `innerText` takes into account styles that affect visibility (like `display: none`), while `innerHTML` just returns whatever is in the element, regardless of CSS.

## **1️⃣ Why Do We Need Primitive Types? (Efficient & Simple)**

Primitive types are **simple values** stored **directly in memory (stack)**. They are essential for:

### **🔹 Fast Access & Performance**

- Since they are stored in the **stack memory**, accessing them is **faster**.
- Example:
  ```javascript
  let x = 10;
  let y = x; // Copying value
  y = 20; // Only y changes, x remains 10
  ```

### **🔹 Immutability (Prevents Unwanted Changes)**

- Primitive values **cannot be modified** once created.
- Example:
  ```javascript
  let str = "Hello";
  str[0] = "J"; // ❌ This won't work
  console.log(str); // "Hello"
  ```

### **🔹 Memory Efficiency**

- Since primitives are stored **by value**, they take up **less space** than objects.

### **🔹 Essential for Comparisons**

- They are compared **by value**, making operations like sorting and filtering easier.
- Example:
  ```javascript
  console.log(10 === 10); // ✅ true
  ```

**✅ Use Primitives When:**
✔ You need **simple values** (numbers, strings, booleans).  
✔ You want **fast access** and **less memory usage**.  
✔ You need values that **shouldn’t change (immutability)**.

---

## **2️⃣ Why Do We Need Non-Primitive Types? (Complex & Flexible)**

Non-primitive types (**objects, arrays, functions**) allow storing **complex data** and **multiple values together**. They are essential for:

### **🔹 Storing Multiple Related Values**

- Objects allow **grouping related data** together.
- Example (Car Object):
  ```javascript
  let car = { brand: "BMW", model: "X5", year: 2023 };
  console.log(car.brand); // "BMW"
  ```

### **🔹 Mutability (Modifiable Data)**

- Unlike primitives, objects **can be updated** without replacing them.
- Example:
  ```javascript
  let person = { name: "Alice", age: 25 };
  person.age = 26; // ✅ Allowed
  ```

### **🔹 Dynamic Data Structures**

- Arrays help store **multiple elements** efficiently.
- Example (List of Car Models):
  ```javascript
  let cars = ["BMW", "Audi", "Tesla"];
  console.log(cars[1]); // "Audi"
  ```

### **🔹 Functions as First-Class Citizens**

- Functions are **objects** and can be assigned to variables, passed as arguments.
- Example:
  ```javascript
  function greet() {
    console.log("Hello!");
  }
  let sayHello = greet;
  sayHello(); // "Hello!"
  ```

### **🔹 Memory Efficiency (Reference Sharing)**

- Objects are stored **in heap memory** and shared using **references**, reducing memory waste.
- Example:
  ```javascript
  let obj1 = { a: 1 };
  let obj2 = obj1; // Reference to same object
  obj2.a = 2;
  console.log(obj1.a); // 2 (both changed)
  ```

**✅ Use Non-Primitives When:**
✔ You need **complex structures** (objects, arrays, functions).  
✔ You need **dynamic and modifiable data**.  
✔ You want to **store multiple values** together.

---

## **🔥 Key Differences:**

| Feature               | Primitive                       | Non-Primitive                             |
| --------------------- | ------------------------------- | ----------------------------------------- |
| **Storage**           | **Stack (direct value)**        | **Heap (reference in stack)**             |
| **Mutability**        | **Immutable**                   | **Mutable**                               |
| **Comparison**        | Compared **by value**           | Compared **by reference**                 |
| **Memory Efficiency** | **Less memory (faster access)** | **More memory (flexible but slower)**     |
| **Use Case**          | Simple data (numbers, strings)  | Complex data (objects, arrays, functions) |

Great question! In JavaScript, **strings behave like arrays in some ways, but they are still immutable**. Let’s break it down.

---

## **1️⃣ Why Can You Access a String Like an Array?**

JavaScript **treats strings as an array-like structure**, meaning you can access individual characters using **index notation (**``**\*\*\*\*)**.

### **Example:**

```javascript
let str = "Hello";
console.log(str[0]); // "H"
console.log(str[1]); // "e"
console.log(str[4]); // "o"
```

This works **because strings are sequences of characters, similar to arrays**. But, unlike arrays, **you cannot modify individual characters**.

---

## **2️⃣ Why Can't You Modify a String Character? (Immutability)**

Even though strings **look like arrays**, they are **primitive and immutable** in JavaScript. This means:

- You **can read** characters using indexes (`str[0]`).
- But **you cannot modify** a character directly (`str[0] = "J"` ❌).

### **Example:**

```javascript
let str = "Hello";
str[0] = "J"; // ❌ Won't work!
console.log(str); // "Hello" (unchanged)
```

🔹 Instead of modifying the original string, **you must create a new string**.

---

## **3️⃣ How to Modify a String? (Create a New One)**

Since strings are **immutable**, you have to create a **new string** when making changes.

### **Example (Fixing the **``** Issue)**

```javascript
let str = "Hello";
str = "J" + str.slice(1); // Create a new string
console.log(str); // "Jello"
```

✅ **Explanation:**

- `"J"` replaces `"H"`.
- `str.slice(1)` takes everything from index **1** onward (`"ello"`).
- `"J" + "ello"` creates **a new string** `"Jello"`.

---

## **4️⃣ Difference Between Strings & Arrays**

| Feature            | String                                | Array                             |
| ------------------ | ------------------------------------- | --------------------------------- |
| **Indexed Access** | ✅ Yes (`str[0]`)                     | ✅ Yes (`arr[0]`)                 |
| **Modification**   | ❌ No (`str[0] = "J"` won’t work)     | ✅ Yes (`arr[0] = "J"` works)     |
| **Mutability**     | ❌ Immutable (must create new string) | ✅ Mutable (can modify elements)  |
| **Methods**        | Fewer (`slice()`, `replace()`, etc.)  | More (`push()`, `splice()`, etc.) |

---

## **5️⃣ Why Are Strings Immutable?**

- JavaScript **stores strings in memory efficiently** using **shared references**.
- If they were mutable, changing one string in memory would **affect other variables** using the same value.
- **Immutability helps with performance and security**.

### **🔍 What Happens Internally When You Reassign a String in JavaScript?**

When you do:

```javascript
let a = "sams";
a = "raitul";
```

You are **not modifying** the original string `"sams"`—you are **creating a new string** and updating `a` to reference the new value. Let’s explore this in depth.

---

## **1️⃣ Memory Allocation: Stack vs. Heap**

JavaScript manages memory in two main areas:  
✅ **Stack Memory** (for primitive values like strings, numbers)  
✅ **Heap Memory** (for objects, arrays, functions)

Since **strings are primitives**, they are stored in the **stack**.

### **Step-by-Step Breakdown**

### **📌 Step 1: Creating `"sams"` and Assigning to `a`**

```javascript
let a = "sams";
```

- A new **string `"sams"` is created in memory**.
- The variable `a` is stored in the **stack** and **points to `"sams"`**.

🛠 **Memory Structure:**

```
Stack:
a  → "sams"
```

---

### **📌 Step 2: Reassigning `a` to `"raitul"`**

```javascript
a = "raitul";
```

- JavaScript **creates a new string `"raitul"`** in memory.
- `a` **now points to `"raitul"`, breaking its link to `"sams"`**.
- `"sams"` is **not modified**—it is just **left unused**.

🛠 **Updated Memory Structure:**

```
Stack:
a  → "raitul"  // "sams" is now unreferenced
```

- If no other variable references `"sams"`, **JavaScript’s Garbage Collector** will eventually remove it.

---

## **2️⃣ How Garbage Collection Works Here?**

JavaScript automatically **cleans up unused memory** through **garbage collection**.

- `"sams"` becomes **unreachable** when `a` stops pointing to it.
- The **garbage collector** sees that no variable references `"sams"` anymore.
- It **removes `"sams"` from memory**, freeing space.

🔍 **When does garbage collection run?**

- JavaScript uses a **mark-and-sweep algorithm** to detect unused objects.
- It **doesn’t happen immediately** but runs **when memory needs to be freed**.

---

## **3️⃣ What If We Had Another Reference to `"sams"`?**

If another variable **still holds `"sams"`,** it won't be deleted:

```javascript
let a = "sams";
let b = a; // 'b' now also references "sams"
a = "raitul"; // 'a' now points to "raitul", but 'b' still holds "sams"
```

🛠 **Memory Structure:**

```
Stack:
a  → "raitul"
b  → "sams"   // Since 'b' still references "sams", it won't be garbage collected
```

✔ `"sams"` **remains in memory** because `b` still references it.

---

## **4️⃣ Why Are Strings Immutable?**

JavaScript **does not modify existing strings** because:  
1️⃣ **Efficiency** – Strings are often shared, and modifying one could affect other variables.  
2️⃣ **Security** – Prevents unintended side effects.  
3️⃣ **Memory Management** – Immutable strings can be optimized by the JavaScript engine.

🔍 **Example of how this prevents issues:**

```javascript
let a = "sams";
let b = a;
a = "raitul"; // If strings were mutable, 'b' would also change. But it doesn't!
console.log(b); // "sams"
```

✔ This ensures `b` **doesn’t change unexpectedly**.

---

## **📌 Key Takeaways**

✔ **Strings are stored in the stack and are immutable.**  
✔ **When reassigned, a new string is created, and the old one is left unused.**  
✔ **JavaScript garbage collects unreferenced strings.**  
✔ **Immutable strings prevent unintended side effects.**

### **🔍 Rest Operator (`...`) vs Spread Operator (`...`) in JavaScript**

Both **rest** and **spread** use the same `...` syntax, but they work **differently** based on how they're used.

---

## **📌 1️⃣ Rest Operator (`...`) – Collects Elements**

The **rest operator** is used in **destructuring** to **gather multiple values into an array or object**.

### **✅ Example: Rest Operator in Array Destructuring**

```javascript
let myArr = ["Nike", 23, 34];

// 'a' gets "Nike", and 'b' collects the rest as an array
let [a, ...b] = myArr;

console.log(a); // "Nike"
console.log(b); // [23, 34]  <-- collected as an array
```

### **✅ Example: Rest Operator in Function Parameters**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30, 40)); // 100
```

✔ The rest operator collects **all function arguments** into an array.

## **📌 2️⃣ Spread Operator (`...`) – Expands Elements**

The **spread operator** is used to **expand elements** from an array, object, or iterable.

### **✅ Example: Spread Operator in Arrays**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

✔ The spread operator **expands** elements from `arr1` and `arr2` into a **new array**.

---

### **✅ Example: Spread Operator in Objects**

```javascript
let user = { name: "Alice", age: 25 };
let updatedUser = { ...user, city: "Berlin" };

console.log(updatedUser);
// { name: "Alice", age: 25, city: "Berlin" }
```

✔ The spread operator **copies object properties** into a new object.

## **🔍 Key Differences**

| Feature     | **Rest Operator (`...`)**                                        | **Spread Operator (`...`)**                                       |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Purpose** | **Collects** values into an array/object                         | **Expands** values from an array/object                           |
| **Usage**   | Used in **destructuring** (arrays/objects) & function parameters | Used in **function arguments, array merging, and object cloning** |
| **Example** | `let [a, ...b] = myArr;` (b collects rest)                       | `let newArr = [...oldArr];` (copies elements)                     |

---

## **📌 Quick Rule of Thumb**

✔ If you are **collecting** values → Use **rest (`...`)**  
✔ If you are **spreading** values → Use **spread (`...`)**

## COMMON ES6 INTERVIEW QUESTIONS 1

1. What is ES6? Have you ever used anything from ES6?
2. Explain the difference between var, let and const.
3. What is the arrow function, and how to create it?
4. Give an example of an Arrow function in ES6? List down its advantages.
5. Discuss spread operator in ES6 with an example.
6. What do you understand about default parameters?
7. What are template literals in ES6?
8. Tell us the difference between arrow and regular function.
9. Tell us the difference between seal and freeze.
10. Tell us the difference between for...of and for...in.

## Paramete vs Arguments

Parameter: Variables of functions
Argument: values/variables; While calling function.

## COMMON INTERVIEW QUESTIONS 2

1. What's the difference between map, foreach, filter?
2. What's the difference between filter and find?
3. What is the difference between for..of and for..in?
4. How do you empty an array?
5. Difference between class and object.
6. What is a Prototype chain? Or how does inheritance work in JavaScript?
7. What does destructing do in es6?
8. Is optional chaining is same as ternary operator?
9. What do you mean by dot notation and bracket notation? When should you use dot notation or
   bracket notation?

## Necessity of destructuring

1. A technique for unpacking objects, arrays, and assigning them to variables
2. Helps to deal with functions that have a lot of parameters, default values
3. Is convenient to write, easy to maintain and friendly to read
4. Saves from writing repetitive code

## Return type filter, find, map and reduce

1. **`filter()`**

   - **Return Type:** `Array`
   - **Description:** Creates a new array containing all elements that pass the provided test function.

2. **`find()`**

   - **Return Type:** `Element | undefined`
   - **Description:** Returns the first element that satisfies the provided test function; otherwise, it returns `undefined`.

3. **`reduce()`**

   - **Return Type:** `Any` (Depends on the accumulator)
   - **Description:** Reduces the array to a single value based on the callback function.

4. **`map()`**
   - **Return Type:** `Array`
   - **Description:** Creates a new array populated with the results of calling a provided function on every element.

### Summary:

| Method   | Return Type                    |
| -------- | ------------------------------ |
| `filter` | `Array`                        |
| `find`   | `Element or undefined`         |
| `reduce` | `Any` (determined by callback) |
| `map`    | `Array`                        |

## undefined and null:

| Value       | `typeof` Output  | Explanation                               |
| ----------- | ---------------- | ----------------------------------------- |
| `undefined` | `"undefined"`    | Default value for uninitialized variables |
| `null`      | `"object"` (bug) | Represents intentional absence of value   |

## Truthy & Falsy value in js

In JavaScript, **falsy** values are values that evaluate to `false` when used in a boolean context (like an `if` statement).

### **Falsy Values in JavaScript:**

There are exactly **7 falsy values** in JavaScript:

1. **`false`** → The boolean `false` itself
2. **`0`** → The number zero (including `-0` and `0n` for BigInt)
3. **`""` (empty string)** → A string with no characters
4. **`null`** → Represents an intentional absence of a value
5. **`undefined`** → Represents an uninitialized value
6. **`NaN`** → "Not-a-Number" value
7. **`document.all`** (weird quirk, acts like `undefined` in modern browsers)

```js
const values = [false, 0, "", null, undefined, NaN];

values.forEach((value) => {
  console.log(value, "is falsy:", !value);
});
```

Or using `Boolean()`:

```js
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

### **Using `!` in Conditional Statements**

You can use `!value` directly in an `if` statement to check for falsy values.

### **Using `!!` in Conditional Statements**

You can use `!!value` directly in an `if` statement to check for truthy values.

## What is Type Conversion/Coercion?

- Type conversion is the process of converting a value from one type to another. Values in JavaScript can be of different types. You could have a number, string, object, boolean. Sometimes, you may want to convert data from one type to another to fit a certain operation.

- Type conversion can either be `implicit` (automatically done during code execution) or `explicit` (done by you the developer).

- Implicit Type Conversion is also known as Coercion while Explicit Type Conversion is also known as Type Casting.

```js
const string = "";
const number = 40;
const boolean = true;

console.log(!string);
// true - string is coerced to boolean `false`, then the NOT operator negates it

console.log(boolean + string);
// "true" - boolean is coerced to string "true", and concatenated with the empty string

console.log(40 + true);
// 41 - boolean is coerced to number 1, and summed with 40
```

### Some facts

console.log(5 == "5"); // true (String "5" is coerced to Number 5)
console.log(5 === "5"); // false (Different types)
console.log(true == 1); // true (true → 1)
console.log(true === 1); // false (Different types)
console.log(null == undefined); // true (both are "empty" values)a
console.log(null === undefined); // false (different types)
console.log(0 == false); // true (false → 0)
console.log(0 === false); // false (different types)

## Note: Non-primtive datatypes check the reference (Mostly not works with equal operator) while using `==` / `===` equal operators wheres primitive check the values.

### Js is on it's way

#### true + false // 1

Binary + operator triggers numeric conversion for true and false:
true + false
==> 1 + 0
==> 1

#### 12 / "6" // 2

Arithmetic division operator / triggers numeric conversion for string '6':
12 / '6'
==> 12 / 6
==>> 2

#### "number" + 15 + 3 // 'number153'

Operator + has left-to-right associativity, so expression "number" + 15 runs first. Since one operand is a string, + operator triggers string conversion for the number 15. On the second step expression "number15" + 3 is evaluated similarly:

“number” + 15 + 3
==> "number15" + 3
==> "number153"

#### 15 + 3 + "number" // '18number'

15 + 3 + "number"
==> 18 + "number"
==> "18number"

#### [1] > null // true

Comparison operator `>` triggers numeric conversion for [1] and null:
[1] > null
==> '1' > 0
==> 1 > 0
==> true

#### "foo" + + "bar" // 'fooNaN'

Unary + operator has higher precedence over binary + operator. So +'bar' expression evaluates first. Unary plus triggers numeric conversion for string 'bar'. Since the string does not represent a valid number, the result is NaN. On the second step, expression 'foo' + NaN is evaluated:
"foo" + + "bar"
==> "foo" + (+"bar")
==> "foo" + NaN
==> "fooNaN"

#### 'true' == true // false

`==` operator triggers numeric conversion, string 'true' is converted to NaN, boolean true is converted to 1.
'true' == true
==> NaN == 1
==> false

#### false == 'false' // false

false == 'false'  
==> 0 == NaN
==> false

#### null == '' // false

== usually triggers numeric conversion, but it’s not the case with null. null equals to null or undefined only, and does not equal to anything else:
null == ''
==> false

#### !!"false" == !!"true" // true

`!!` operator converts both 'true' and 'false' strings to boolean true, since they are non-empty strings. Then, `==` just checks equality of two boolean true's without any coercion:
!!"false" == !!"true"  
==> true == true
==> true

#### ['x'] == 'x' // true

When an array is compared with a string, js first converts the array to a primitive using the toString() method.
['x'] == 'x'  
==> 'x' == 'x'
==> true

#### [] + null + 1 // 'null1'

[] + null + 1  
==> '' + null + 1  
==> 'null' + 1  
==> 'null1'

Logical || and && operators coerce operands to boolean, but return original operands (not booleans). 0 is falsy, whereas '0' is truthy, because it’s a non-empty string. {} empty object is truthy as well:
0 || "0" && {}  
==> (0 || "0") && {}
==> (false || true) && true // internally
==> "0" && {}
==> true && true // internally
==> {}

#### [1,2,3] == [1,2,3] // false

No coercion is needed because both operands have same type. Since `==` checks for object identity (and not for object equality) and the two arrays are two different instances, the result is false.
[1,2,3] == [1,2,3]
==> false

#### Note:

When you use == (or ===), objects (including arrays) are compared by reference, not by value.
This means that two arrays are only == or === if they point to the exact same memory location.

#### {}+[]+{}+[1] // '0[object Object]1'

All operands are non-primitive values, so + starts with the leftmost triggering numeric conversion. Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored. toString() is used as a fallback. The trick here is that first {} is not considered as an object literal, but rather as a block declaration statement, so it’s ignored. Evaluation starts with next +[] expression, which is converted to an empty string via toString() method and then to 0:

{}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1'

#### !+[]+[]+![] // 'truefalse'

!+[]+[]+![]  
==> (!+[]) + [] + (![])
==> !0 + [] + false
==> true + [] + false
==> true + '' + false
==> 'truefalse'

#### new Date(0) - 0 // 0

`-` operator triggers numeric conversion for Date. Date.valueOf() returns number of milliseconds since Unix epoch:
new Date(0) - 0
==> 0 - 0
==> 0

#### new Date(0) + 0 // 'Thu Jan 01 1970 02:00:00(EET)0'

`+` operator triggers default conversion. Date assumes string conversion as a default one, so toString() method is used, rather than valueOf():
new Date(0) + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'

## **JavaScript Hoisting**

Hoisting in JavaScript is a behavior where variable and function declarations are moved ("hoisted") to the top of their scope before the code execution.

However, only the **declarations** are hoisted, not the initializations.

---

## **1. Hoisting with `var`**

When you declare a variable using `var`, JavaScript moves the declaration to the top of its scope but **not the assignment**.

```js
console.log(a); // undefined (not an error)
var a = 10;
console.log(a); // 10
```

🔹 **Why undefined?**  
Because `var a;` is hoisted to the top, but `a = 10;` stays in place.

Internally, JavaScript interprets it as:

```js
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

---

## **2. Hoisting with `let` and `const`**

Variables declared with `let` and `const` are also hoisted, but they are in a **Temporal Dead Zone (TDZ)** until initialized.

```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20
```

The same applies to `const`:

```js
console.log(c); // ❌ ReferenceError
const c = 30;
console.log(c);
```

---

## **3. Hoisting with Functions**

### **Function Declarations**

Function declarations are **fully hoisted**, meaning you can call the function before its declaration.

```js
greet(); // ✅ "Hello!"

function greet() {
  console.log("Hello!");
}
```

Internally, JavaScript moves the whole function to the top:

```js
function greet() {
  console.log("Hello!");
}

greet();
```

### **Function Expressions (`var`, `let`, `const`)**

Function expressions **are not hoisted** the same way.

#### **Using `var`**

```js
console.log(sayHi); // undefined
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
```

🔹 The variable `sayHi` is hoisted but initialized as `undefined`.

#### **Using `let` or `const`**

```js
console.log(sayHello); // ❌ ReferenceError
const sayHello = function () {
  console.log("Hello!");
};
```

🔹 `let` and `const` follow TDZ rules, so accessing before declaration throws an error.

## JavaScript Closure

### **What is a Closure?**

A **closure** happens when an inner function "remembers" the variables from its outer function, even after the outer function has finished running.

### **Explanation**

1. **Lexical Scope** means that a function knows about variables in the place where it was created.
2. Normally, when a function runs, its local variables (variables inside the function) disappear after execution.
3. But **a closure keeps those variables alive** by remembering them, even if the outer function is gone.

---

### **Example 1: Closure in Action**

```javascript
function outerFunction() {
  let message = "Hello, Closure!"; // Variable inside outerFunction

  return function innerFunction() {
    console.log(message); // innerFunction "remembers" message
  };
}

const closureFunction = outerFunction(); // outerFunction runs and returns innerFunction
closureFunction(); // Output: Hello, Closure!
```

#### **Why does this work?**

- `innerFunction` was **created inside** `outerFunction`, so it **remembers** `message` (lexical scope).
- Even though `outerFunction()` has **finished executing**, `message` is still accessible to `innerFunction`.
- This is **a closure**—a function remembering variables even after its parent function is gone.

---

### **Example 2: Practical Use Case – Private Counter**

Closures are useful for **data privacy**.

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

#### **What’s happening here?**

- `count` is inside `createCounter()`, so it's **not directly accessible** outside.
- But `increment` and `decrement` can **still access count** because of the closure.
- This keeps `count` **private and safe**.

## `arguments` Object in JavaScript

The **`arguments`** object is an **array-like** object available inside functions that allows access to all arguments passed to the function, even if they are not explicitly declared as parameters.

### Key Features:

1. **Works only in non-arrow functions**:  
   The `arguments` object is not available in **arrow functions**.
2. **Contains all passed arguments**:  
   It includes even those arguments that were not declared in the function signature.
3. **Array-like but not an actual array**:  
   It has a `length` property but lacks array methods like `map()`, `forEach()`, etc.

---

### Example Usage:

```javascript
function sum() {
  let total = 0;
  console.log(arguments); //[Arguments] { '0': 2, '1': 4, '2': 6, '3': 8, '4': 10 }
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]; // Accessing arguments dynamically
  }
  return total;
}

console.log(sum(2, 4, 6, 8, 10)); // Output: 30
```

Here, `arguments` allows handling a variable number of arguments without explicitly defining parameters.

---

### `arguments.length`:

You can check how many arguments were passed using `arguments.length`.

```javascript
function checkArgs() {
  console.log("Number of arguments passed:", arguments.length);
}

checkArgs(1, 2, 3); // Output: Number of arguments passed: 3
checkArgs(); // Output: Number of arguments passed: 0
```

---

### `arguments` in Arrow Functions:

Arrow functions **do not** have their own `arguments` object. If used inside an arrow function, it refers to the `arguments` of the nearest **regular function**.

```javascript
const arrowFunction = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

arrowFunction(1, 2, 3);
```

To work around this, use **rest parameters (`...args`)** instead.

```javascript
const sumArrow = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArrow(5, 10, 15)); // Output: 30
```

---

### `arguments` vs Rest Parameters (`...args`)

| Feature                       | `arguments` | Rest Parameters (`...args`) |
| ----------------------------- | ----------- | --------------------------- |
| Available in arrow functions  | ❌ No       | ✅ Yes                      |
| Works in old JS versions      | ✅ Yes      | ❌ No (ES6+)                |
| Array-like                    | ✅ Yes      | ✅ Yes (but real array)     |
| Supports array methods        | ❌ No       | ✅ Yes                      |
| Only named arguments included | ✅ Yes      | ✅ Yes                      |

---

### Summary:

- **`arguments`** is an **array-like** object available in **regular functions**.
- It includes **all** arguments passed, even if not explicitly declared.
- It does **not** work in **arrow functions**.
- Use **rest parameters (`...args`)** in modern JavaScript instead.

## Error Debug

```js
const savingAmount = (savePercentage / 100) \* income
```

If there is a id named "income" and income is not defined or assigned a value in the particular scope then it reference the id in the DOM which return the element and it defines as global variables. We can get the value from this by using `income.value`.

## Synchronous vs Asynchronous

`setTimeout()` is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.

## Explore API

# 🌍 **Understanding the Internet & APIs **

Think of the internet as a **huge network of roads** 🚗 that connect different cities (computers). Every city has a unique address, and there are rules that control how cars move between them. Let’s explore these concepts one by one!

---

## **1️⃣ What is an API? (Application Programming Interface)**

### 📌 **Imagine a Restaurant Scenario 🍽️**

You're at a restaurant and want to order food. But you don’t go to the kitchen; instead, you call a **waiter** (API). The waiter:

1. Takes your order 📝
2. Gives it to the chef 👨‍🍳
3. Brings back your food 🍲

Similarly, an API acts as a **middleman** that helps different software applications communicate.

### 🌟 **Example of an API in Real Life**

Let’s say you open a **Weather App**. The app itself **does not know** the temperature—it asks a **Weather API** like this:

```http
GET https://api.weather.com/current?city=Berlin
```

The API replies:

```json
{
  "temperature": "15°C",
  "condition": "Cloudy"
}
```

This response is **used by the app** to show the weather on your screen.

💡 **In short:**

- The API is like a **waiter** 🏃
- Your request is like an **order** 🍽️
- The server is like a **kitchen** 🍳

---

## **2️⃣ How Does the Internet Work? (The Postal System Analogy 📬)**

The **internet** is like a giant **postal service** 📦. If you send a letter, it needs:

1. **An Address** (Where is it going?)
2. **A Route** (How will it get there?)
3. **A Protocol** (Rules for delivery)

---

### **🔹 HTTP vs HTTPS (How Websites Communicate)**

Think of **HTTP** and **HTTPS** as **languages** websites use to talk.

| Feature  | HTTP (🚨 Old)          | HTTPS (🔒 Secure)         |
| -------- | ---------------------- | ------------------------- |
| Security | Not encrypted          | Uses encryption (SSL/TLS) |
| Risk     | Hackers can steal data | Safe from hackers         |
| Example  | `http://example.com`   | `https://example.com`     |

💡 **Always prefer HTTPS**—it keeps your passwords and personal info safe!

---

### **🔹 Different Internet Protocols (The Different Postal Services 📦)**

| Protocol           | Purpose                              | Example                       |
| ------------------ | ------------------------------------ | ----------------------------- |
| **HTTP/HTTPS**     | Web browsing                         | Visiting websites             |
| **FTP**            | File transfers                       | Uploading/downloading files   |
| **SMTP/POP3/IMAP** | Emails                               | Sending and receiving emails  |
| **DNS**            | Converts website names into IPs      | `google.com → 142.250.182.14` |
| **TCP/IP**         | Controls how data is sent & received | Backbone of the internet      |

**1. Definition of an IP Address:**
An IP (Internet Protocol) address is a unique numerical identifier assigned to each device connected to a network that uses the Internet Protocol for communication. It facilitates the correct routing and delivery of data between devices over the internet or local networks. citeturn0search0

**2. Structure of IP Addresses:**

- **IPv4:** Consists of 32 bits, typically represented as four decimal numbers separated by dots (e.g., 192.168.1.1). citeturn0search2
- **IPv6:** A newer version with 128 bits, represented as eight groups of four hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

**3. Types of IP Addresses:**

- **Public IP Address:** Assigned to devices that connect directly to the internet, allowing them to be uniquely identified globally. citeturn0search5
- **Private IP Address:** Used within local networks (like home or office networks) and not routable on the global internet. Common private IP ranges include 192.168.x.x and 10.x.x.x.

**4. Static vs. Dynamic IP Addresses:**

- **Static IP Address:** Permanently assigned to a device, ensuring it always has the same IP address. citeturn0search9
- **Dynamic IP Address:** Temporarily assigned from a pool of available addresses by a DHCP server, often changing over time.

**5. Functionality of IP Addresses:**
IP addresses serve two primary purposes:

- **Identification:** Uniquely identifying a device on a network.
- **Location Addressing:** Providing information about the device's location within the network to facilitate proper routing of data.

### **📌 JSON.stringify() vs JSON.parse() in JavaScript**

JSON (JavaScript Object Notation) is a format for storing and exchanging data. In JavaScript, `JSON.stringify()` and `JSON.parse()` are two important methods used for converting between **JavaScript objects** and **JSON format**.

---

## **🔹 JSON.stringify()**

**Converts a JavaScript object into a JSON string.**

📌 **Use Case:** When you need to send data (like API requests) or store it (like in `localStorage`).

### **🔹 Example**

```js
const user = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(user);

console.log(jsonString);
// Output: '{"name":"John","age":30,"city":"New York"}'
```

- Converts the **JavaScript object** into a **JSON string**.
- JSON strings can be stored, sent, or used in APIs.

---

## **🔹 JSON.parse()**

**Converts a JSON string back into a JavaScript object.**

📌 **Use Case:** When receiving JSON data from an API or retrieving it from storage.

### **🔹 Example**

```js
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const userObj = JSON.parse(jsonString);

console.log(userObj.name);
// Output: John
console.log(userObj.age);
// Output: 30
```

- Converts a **JSON string** back into a **JavaScript object**.
- The parsed object can now be used like a normal JavaScript object.

---

## **🔹 Key Differences**

| Method             | Purpose                      | Input             | Output            |
| ------------------ | ---------------------------- | ----------------- | ----------------- |
| `JSON.stringify()` | Convert Object → JSON String | JavaScript object | JSON string       |
| `JSON.parse()`     | Convert JSON String → Object | JSON string       | JavaScript object |

---

## **🔹 Example Use Case: Storing Data in Local Storage**

```js
const user = { name: "Alice", age: 25 };

// Save object in localStorage
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse it
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Alice
```

- `JSON.stringify()` **stores** the object as a JSON string.
- `JSON.parse()` **retrieves** and converts it back into an object.

---

## **🔹 Things to Remember**

✅ `JSON.stringify()` **removes functions and undefined values** because JSON only supports numbers, strings, booleans, arrays, and objects.  
✅ `JSON.parse()` **must be used on a valid JSON string**—if not, it throws an error.  
✅ **Circular references in objects** (e.g., `obj.self = obj`) will cause `JSON.stringify()` to fail.
