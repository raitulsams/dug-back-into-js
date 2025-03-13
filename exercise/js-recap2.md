HTML: Hypertext Markup Language.
H = Reference/Link
Text= Data/Information
Markup = Predefined/Marked
Language = Language/Communication

What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: `<div>` and `<span> `- Tells nothing about its content.
Examples of semantic elements: `<form>, <table>, <article>` - Clearly defines its content

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

## Git Command:

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
``<audio>
<canvas>
<command>
<datalist>

<details>
<embed>
<video>``

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

## Note: Inside the tag, id, class, anything is attribute

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
