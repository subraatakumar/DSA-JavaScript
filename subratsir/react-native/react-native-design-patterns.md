# React Native Design Patterns

## Container Component Pattern

## Styling patterns

## Navigation Patterns: 

how to handle multiple screens. One of the examples is the React Navigation. It is a JavaScript library that provides components which will transition across screens.

## Higher Order Component Pattern: 

how to avoid repetitive code 

## Render Props Pattern: 

sharing code. In this type of patten Prop of component is assigned a function. The function is called in render method of the component and can return a react element. 

```js
  // render props as function
  const dataToDisplay = "The data"
  
  const ComponentDataProvider = (({render}) => (<View>{render(dataToDisplay)}</View>) )
  
  const ComponentToProvideRender = () => (
    <ComponentDataProvider render={ (data) => <Text>the data is {data}</Text>}
  );
```

## Compoung Component Pattern: 

Communication across components

## Context API Pattern: 

how to avoid prop drilling

## Hooks Pattern : 
