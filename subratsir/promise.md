# Promise

Javascript promise can be used to handle asynchronous operations. It has four states:

- Pending : Initial state, at this state promise neither has been resolved nor been rejected.
- Resolved : This state represents that the promise has been resolved.
- Rejected : This state represents that the promise has been rejected.
- settled : This state represets that the promise has either been resolved or rejected.

A promise can be created using Promise constructor. It takes a callback function as parameter. This callback function again takes two parameters, resolve and reject. resolve function accepts parameter that to be returned when the promise resolved successfully and reject function accepts parameter that to be returned when the promise rejected.

```js
function sumElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length <= 0 ){
      reject("No elements given to sum!");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum of given elements is : "+sum);
    }
  })
}
```

We can consume any promise by attaching then and catch to the consumer. then is used to access the return value of resolve function and catch is used to access the return value of reject function.

```js
// accessing return of resolve function
sumElements(1,2,3,4,5,6)
.then(result=> console.log(result))
.catch(error=> console.log(error));
```

```js
// accessing return of reject function
sumElements()
.then(result=> console.log(result))
.catch(error=> console.log(error));
```

Usinf async await to call a promise

```js
// accessing return of resolve function
async function y() {
	try{
	   let x = await sumElements(1,2,3,4,5,6);
  	   console.log(x)
	}catch(e){
  	   console.log(e)
  	}
   }

y();
```

```js
// accessing return of reject function
async function y() {
	try{
    	   let x = await sumElements();
  	   console.log(x)
        }catch(e){
  	   console.log(e)
        }
}

y();
```

## Another Example

```js
function fun1(){
	console.log("Called ...1")
	return new Promise((resolve, reject) => {
  	setTimeout(() =>{
    	resolve('Resolved...1')
    },10000)
  })
}

function fun2(){
	console.log("Called ...2")
	return new Promise((resolve, reject) => {
  	setTimeout(() =>{
    	resolve('Resolved...2')
    },2000)
  })
}

function fun3(){
	console.log("Called ...3")
	return new Promise((resolve, reject) => {
  	setTimeout(() =>{
    	resolve('Resolved...3')
    },2000)
  })
}

async function fun4(){
	let x = await fun1();
  console.log(x);
  let y = await fun2();
  console.log(y);
  let z = await fun3();
  console.log(z);
}

fun4();
```


[Home](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/README.md)
