# What is the use of useRef ? Using useRef write an example to change the button color on click.

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can also be used to access a DOM element directly.

```js
import React, {useRef} from 'react';

export function App(props) {
  const btn = useRef();

  const handleClick = () => {
    console.log("Clicked");
    if(btn.current.style.backgroundColor === 'red')
      btn.current.style.backgroundColor = 'green';
    else
      btn.current.style.backgroundColor = 'red';
  }
  return (
    <div className='App'>
      <h1>useRef Example to change button color on click</h1>
      <button ref={btn} onClick = {handleClick} style={{backgroundColor:'red', color:'white'}}>Ok</button>
    </div>
  );
}
```
