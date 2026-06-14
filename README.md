## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: find a single element of a specific id.
getElementsByClassName: Find all matching classes.
querySelector: Find only the first match..
querySelectorAll: Find all matches in a list.

### 2. How do you create and insert a new element into the DOM?
Create: using document.createElement("")
Insert: using parent.appendChild()

### 3. What is Event Bubbling? And how does it work?
When you trigger an event (like a click) on a child element, that event automatically  triggering the same event on its parent and all upper ancestors one by one.

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): Stops the browser's built-in default action like stops a form from refreshing the page or a link from navigating.

stopPropagation(): Stops the event bubble .

