HTML: Hypertext Markup Language.
H = Reference/Link
Text= Data/Information
Markup = Predefined/Marked
Language = Language/Communication

What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content

Self closing tags: <br/>, <img>, <link>

CSS:
3 types: Internal, Inline, External
Selectors: Class, ID, Universal, Element, Attribute & Grouping selectors.
Attribute Selectors: input [type="password"]{
color: red;
}

Box Model:

- content
- Border
- Margin
- Padding
- Width/height

Display:

display: none; visibility: none;

Background Position:

background-position: left top; (Top-right corner)
background-position: 0 0;
background-position: top;
background-position: 50% 0; (Vertically middle)

What is version control?
Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.

Version Control Systems (VCS) are tools that help manage changes to source code and other collections of information.
There are three main types of VCS:

- Local Version Control System (LVCS)
- Centralized Version Control System (CVCS)
- Distributed Version Control System (DVCS)

Github is a web based hosting service and platform that utilizes the git version control.

Git Command:

git add .
git commit
git branch -M main
git remote add origin "link"
git push -u origin main

git branch; Branch information
git remote -v; Remote information
git checkout main; Move to the another branch
git checkout -b veg-khaina; Creating new branch

\*\* fork kore nijer local e niye asha, then new branch kore existing project modify kore.
Push korar time e error ashbe karon je branch create korsi sheta main project e nai. Eijonno

- git push -set--upstream origin branch-name dite hoy.
  Modify seshe pull request kora main project owner k. Project owner can review and merge or reject the pull request.

New tags in HTML5
<audio>
<canvas>
<command>
<datalist>

<details>
<embed>
<video>

New semantic tags\*
Semantic defines what the tag are used for.

<header>
<nav>
<article>
<section>
<aside>
<footer>

-- Form/label/fieldset/

<fieldset>
<label for="chitoy"><input type="radio" name="pitha" id="chitoy">Chitoy </label>
<label for="vapa"><input type="radio" name="pitha" id="vapa">Vapa </label>
</fieldset>
 
ekhane for="name" ta hocche input field er id name.
name="pitha" - input field e same rakhle radio button ekta choose korbe
Kintu type="checkbox" holey multiple select korte parbe

-- nav
nav er vitor immediete child, bakider ignore kora.
nav > ul {
display:flex;
}

ar eta hocche all ul k
nav ul {
display:flex;
}

nav li .dropdown{
display:none;
position: absolute; //means baki element k affect korbena, element thakle tar upore show korbe
}

CSS Positions

-- flow related
static
absolute
relattive

-- scroll related
fixed
sticky

.ring{
position: relative;
left: 100px;
top: 20px;
}
current position theke left and top e move korbe. eta kokhono tar nijer jayga chare na.

.ring{
position: absolute;
left: 100px;
top: 20px;
}
nijer kono specific jayga nei. left and top sorbe root theke.
abar jodi er parent er postion:relative dewa thake tahole sheta tar parent theke sorbe.

.ring{
position: sticky;
top: 0px;
}
top theke sticky thakbe scroll er somoy.

.ring{
position: fixed;
left: 100px;
top: 20px;
}
website er jekhanei thaki na keno eta fixed thakbe. means sob content er upor overflow korbe.

-- Z-index

kono ekta element er upor arekta element boshanor jonno z-index use hoy.

z-index er value sob cheye highest jeta hobe sheta baki element er upore boshbe and sequentially emn e hobe.

-- pseduo element

h3::after{
content: '.pdf'
}
h3::before{
content: '\* '
}
p::first-letter{
font-size: 2em;
}

p::first-line{
background-color: red';
}

::selection{
background-color: yellow;
}

input::placeholder{
color: blue;
}

-- CSS Responsive
.container {
display: grid;
gap: 3px;
grid-template-areas:
"item-1 item-2 item-2"
"item-1 item-3 item-4";
grid-template-columns: 2fr 1fr 1fr;
}

-- Free images and resources for website
https://medium.com/design-bootcamp/free-images-and-resources-collection-for-website-c77f2fc46ce5

1. https://bgjar.com/ [Free svg background generator for your websites, blogs and app.]
2. https://app.haikei.app/
3. https://coolbackgrounds.io/
4. https://meshgradient.in/
5. https://www.svgbackgrounds.com/

-- Animated

1. https://lottiefiles.com/
2. https://icons8.com/icons/set/popular--animated
3. https://mixkit.co/
4. https://www.humaaans.com/
5. https://www.openpeeps.com/

-- Free image websites & illustrations

1. https://undraw.co/
2. https://www.drawkit.com/
3. https://pixabay.com/
4. https://www.pexels.com/
5. https://www.shopify.com/stock-photos
6. https://stocksnap.io/
7. https://www.reshot.com/
8. https://www.freepik.com/
9. https://gratisography.com/
10. https://www.lifeofpix.com/
11. https://kaboompics.com/
12. https://unsplash.com/
13. https://www.manypixels.co/gallery
14. https://opendoodles.com/

-- Template to Practice

1. https://www.frontendmentor.io/
2. https://uideck.com/
3. https://colorlib.com/wp/templates/
4. https://templatemo.com/
5. https://html5up.net/
6. https://www.free-css.com/
7. https://startbootstrap.com/
8. https://themesfor.app/
9. https://bootstrapmade.com/
10. https://bootstraptaste.com/

-- CSS3

width er baire likha guli (...) hoye show korbe.
even you can try to set the whole text in the title="something" attribute.
.box{
width: 200px
white-space:no-wrap;
text-decoration: ellipsis;
transition: transform 1s;
}

.box:hover{
transform: rotate(45deg) scale(102) translateX(150px);
}

-- transform-origin
sets the origin for an element's transformations.

/_ y-offset-keyword | x-offset-keyword | z-offset _/
transform-origin: bottom right 2cm;
transform-origin: top right;

-- Optimize images

1. Photopea
2. TinyPNG

-- Specity, style, priority 11_5
Inline style <h1 style="color: pink;"> Highest priority, directly applied with the style attribute
Id selectors #navbar Second highest priority, identified by the unique id attribute of an element
Classes and pseudo-classes .test, :hover Third highest priority, targeted using class names
Attributes [type="text"] Low priority, applies to attributes
Elements and pseudo-elements h1, ::before, ::after Lowest priority, applies to HTML elements and pseudo-elements

-- Daisy UI (Component library of tailwind CSS)

Bootstrap vs Tailwind CSS:

Bootstrap is component based CSS framework whereas Tailwind CSS is utility based CSS framework.

Bootstrap: UI Component Library
Key Idea: Bootstrap gives you ready-made components, such as buttons, navbars, or modals, that are already styled and follow a consistent design system.

Tailwind CSS: Utility Library
Key Idea: Tailwind gives you utility classes (small, single-purpose classes) to build your own components from scratch. It doesn’t provide pre-styled buttons or design systems. Instead, you create a button by combining utility classes.

// HTML Collection
Collection of elements, Array like objects, Real time change, Only HTML Specific Elements. (getElementsByTagName, getElementsByClassName), For...of loop

// Node List
Static elements, Not real time changes, (querySelectorAll), foreach

// Inside the tag, id, class, anything is attribute

// Event

<button id = "make-blue"> Make Blue </button>

const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeBlueColor

function makeBlueColor(){
document.body.style.backgroundColor = "blue"
}

- When you do this, it means function will call when you click the button.

event.stopPropagation(); call only the events in selected element, even multiple event will call; stop bubbling

event.stopImediatePropagation(); call only the event in selected element, even the if element has multiple event it won't call; stop bubbling

- Event propagation and deligation

  If we create element dynamically, the existing even handlers won't work on the newly created element.
  That's why adding event in the parent and do task in the child is the best practice.

- Primitive vs Non-primitive

  Primitive Data Types (Immutable)
  Stored directly in memory (stack)
  Immutable (cannot be changed directly)
  Compared by value

  Non-Primitive Data Types (Mutable)
  Stored in heap memory (reference stored in stack)
  Mutable (can be modified)
  Compared by reference; hold the reference in memory location.

- Deep Copy vs Shallow Copy

  Primitive types are copied by value.
  Non-primitive types are copied by reference (shallow copy).
  Use structuredClone(), JSON.parse(JSON.stringify(obj)), or \_.cloneDeep(obj) (Lodash) for deep copies.

- Why we need that?
  To handle different kinds of data efficiently and flexibly.
  We need **primitive** and **non-primitive** types in JavaScript because they serve different purposes in memory management, data handling, and program efficiency. Let's break it down:

---

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

---

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

---

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
