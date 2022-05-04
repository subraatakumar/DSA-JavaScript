# What is event delegation ?

Event Delegation is the way of handling events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

```js
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

const customUI = document.createElement("ul");

function responding(evt) {
  if (evt.target.nodeName === "LI") {
    console.log("Clicked : " + evt.target.textContent);
  }
}

for (var i = 1; i <= 10; i++) {
  const newElement = document.createElement("li");
  newElement.textContent = "This is line " + i;
  customUI.appendChild(newElement);
}

customUI.addEventListener("click", responding);
document.getElementById("app").appendChild(customUI);
```

[codesandbox link](https://codesandbox.io/s/event-delegation-example-eoen3y)
