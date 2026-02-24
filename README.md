1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
1.getElementById() selector an element by its id and returns a single element.
2.getElementsByClassName() selects elements by class name and returns.
3.querySelector() selector the first element that matches a css selector and returns a single element.
4.querySelectorAll() selects all elements that match a CSS selector and returns a nodelist.


2. How to create and insert a new element into the DOM.
ans:To create and insert a new element is:-
Use document.createElement() to create the element.
added content using innerHTML.
insert it into the dom using appendChild().

3. What is Event Bubbling? How does it work?
ans:
Event Bubbling is a mechanism where an event starts from the target element and propagates upward to its parent elements in the dom tree.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:
Event delegation is technique where a single event listener is added to a parent element to handle events for its child elements using event bubling.

5. Difference between preventDefault() and stopPropagation()
ans:
preventDefault() prevents the default browser action form submission or link navigation.stopPropagation() prevents the event from bubbling up to parent elements.this is different between of preventDefault() and stopPropagation().
