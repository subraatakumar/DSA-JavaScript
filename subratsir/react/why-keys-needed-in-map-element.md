"Want to take your ReactJS game to the next level? Learn how to master the art of keys and diffing algorithm to unlock a world of possibilities for faster and efficient web development!

▶︎ Are keys always needed?

▶︎▶︎ Not at all. 

Reconciliation process consists of an algorithm called diffing. Diffing helps in rerendering the virtual DOM tree(also called as UI tree) to differentiate between items when they look the same to React. Providing special prop key helps the algorithm to easily update as algorithm relies on it to optimise re-rendering.

▶︎ When items look same to React?

▶︎▶︎ When they have same piece of ultimately generated React Elements’ tree.

▶︎ So <div>React</div> and <div className = “cool”>React</div> will seem same to React?

▶︎▶︎ Yes. Because React relies on the type of React Element, that is “div” here.

▶︎ Why do we need keys when we map over an Array of JSX elements?

▶︎▶︎ Because React will rely on diffing algorithm to figure out the changes in the UI tree. Diffing algorithm will feel all the array of JSX elements is same every time it is changed. Like one element removed etc. 

▶︎ So my React application will not work if I don’t add keys?

▶︎▶︎ No! It will still work. But React will reinstall all the elements every time some update happens in the array of elements.

▶︎ So if I never update my Array of JSX elements, do I need to provide keys?

▶︎▶︎ No, you don’t need the keys then. Keys are only needed for diffing algorithm when some update happens in the Array of elements.


Okay, okay got it. I will use keys from now onwards when they will be needed.
