# Arrays

An array is defined as a fixed-size collection of elements of the same data type stored in contiguous memory locations. It is the simplest data structure where each element of the array 
can be accessed using its index number. Index number can be defined as a serial number which starts from zero (0).

## Properties

- Each element of the array is of the same data type and occupies same size in memory. 
- The elements of the array can be accessed by their index numbers. The index number is nothing but serial number starting from zero (0).
- The elements of the array are stored in contigous memory locations.

## Time Complexity of Various Operations

- Accessing an Element: As each element can be accessed through it's index number so time consumed is O(1) when index number of the element to be accessed is given.
- Finding an Element by value: As index is not known we have to visit through each elements so O(N) time.
- Updating an Element at specific index: O(1) time
- Updating a Value to another Value: O(N) time
- Inserting a value: O(N) time

## Creating Array

JavaScript does not have an explicit array data type. However we can use predefined `Array` object for this purpose.

~~~javascript
    const a = new Array(1,12,3,4,5);
    const b = Array(1,2,3,4,5);
    const c = [1,2,3,4,5];
~~~

any one of the above statements can be used to create an `Array`. The last one is the shortest form to create and initialise an array. It is also called `array literal`. To declare empty array (array with out elements), don't pass any argument.

## Updating Elements

~~~javascript
    const a = new Array(1,12,3,4,5);
    a[2] = 15;
    console.log(a); // Prints [1,12,15,4,5] on console
    console.log(a.length) // Prints 5
    a[1.3] = 18; // It is also acceptable statement. Javascript arrays stores their elements as standard object properties 
    // using the array index as propertyname and given element as property value. as index 1.3 does not exist 
    // so it creates a new property name 1.3 and stores value 18 to it.
    console.log(a) // Prints [1, 12, 15, 4, 5, 1.3: 18]
    console.log(a.length) // Prints 5, because the length property of Array object returns 
    // the gighest index stored in the array + 1.
    a[9.2] = 17;
    console.log(a) // [1, 12, 15, 4, 5, 1.3: 18, 9.2: 17]
    console.log(a.length) // 5
    a[30] = 51; 
    console.log(a) // [1, 12, 15, 4, 5, empty × 25, 51, 1.3: 18, 9.2: 17]
    console.log(a.length) // 31
    a.length = 2  // Trims length to 2 elements but don't delete the object elements
    console.log(a)  // [1, 12, 1.3: 18, 9.2: 17]
    delete a[1.3] 
    console.log(a) // [1, 12, 9.2: 17]   
~~~

## Iterating through array elements

Example :
~~~javascript
    const a = new Array(1,12,3,4,5);
    a[1.3] = 18;
    a[9.2] = 17;
    console.log("Iterating using for loop");
    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }
~~~
Output :
~~~
1 
12
3
4
5
~~~
Example:
~~~javascript
    console.log("Iterating using forEach");
    a.forEach((item) => console.log(item));
~~~
Output :
~~~
1 
12
3
4
5
~~~
Example:
~~~javascript
    console.log("Iterating using map function");
    a.map(item => console.log(item));
~~~
Output :
~~~
1 
12
3
4
5
~~~

All above examples provide same output. Using for loop we have more control over the elements as we are able to access their index number. Using forEach also we can assess the index number. Let us have a look at the below example.

Example:
~~~javascript
    console.log("Iterating using forEach");
    a.forEach((item,index) => console.log(index, item));
~~~
Output :
~~~
0  1 
1  12
2  3
3  4
4  5
~~~

Note : have you observed that, using either of the above methods we can't access the array object property elements.

## Array Methods

- concat() : joins two or more arrays and return a new array

~~~javascript
    let a = new Array(1,12,3,4,5);
    let b = ["ramesh", "suresh", "madhu"]
    console.log(a.concat(b)) // [1, 12, 3, 4, 5, 'ramesh', 'suresh', 'madhu']
~~~

- join(delimeter = ',') : joins all elements of an array into a string.

~~~javascript
    let b = ["ramesh", "suresh", "madhu"]
    console.log(b.join('')) // rameshsureshmadhu
    console.log(b.join('-')) // ramesh-suresh-madhu
~~~

- split(delimeter = ',') : splits a string into array elements

~~~javascript
    let a = "Ramesh Suresh Mahesh";
    console.log(a.split(" ")) // ['Ramesh', 'Suresh', 'Mahesh']
    let b = "1,2,3,4,5,6,7,8"
    console.log(b.split(",")) // ['1', '2', '3', '4', '5', '6', '7', '8']
~~~

- slice(start_index, up_to_index) extracts a section of an array and returns a new array.

~~~javascript
    let myArray = new Array('a', 'b', 'c', 'd', 'e')
    myArray = myArray.slice(1, 4)  // starts at index 1 and extracts all elements
                                   // until index 3, returning [ "b", "c", "d"]
~~

- splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

~~~javascript
    let myArray = new Array('1', '2', '3', '4', '5')
    console.log (myArray.splice(1, 3, 'a', 'b', 'c', 'd'))
    console.log(myArray)
~~~

- reverse() : reverses the array elements

~~~javascript
    let myArray = new Array('1', '2', '3', '4', '5')
    console.log (myArray.reverse()) // ['5', '4', '3', '2', '1']
~~~

- sort() : sorts the elements of an array in place, and returns a reference to the array.

~~~javascript
    let x = ["Ramesh", "Ajay", "Somesh","Atul","Bunty"];
    console.log(x.sort()); // ['Ajay', 'Atul', 'Bunty', 'Ramesh', 'Somesh']
    let a = new Array(18, 12, 103, 4, 5);
    console.log (a.sort()); // [103, 12, 18, 4, 5] - because integers are also sorted like strings so 10 first then 12 then 18 then 4 and then 5
    console.log (a.sort((a,b) => a - b)); // [4, 5, 12, 18, 103]
~~~

- indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match.

~~~javascript
    let a = ['a', 'b', 'a', 'b', 'a']
    console.log(a.indexOf('a'))     // 0
    console.log(a.indexOf('b', 2))  // 3
    console.log(a.indexOf('z'))     // -1, because 'z' was not found
~~~

- reduce()

~~~javascript
    let a = [1,2,3,4,5,6]
    // Sum all elements of array
    console.log(a.reduce((a,b) => a+b))     // 21
    // Multiply all elements of array
    console.log(a.reduce((a,b) => a*b))     // 720
    // Start from 0th index. If current element is greater then next then current - next else next - current
    console.log(a.reduce((a,b) => a>b ? a-b : b-a))     // 3
~~~

- every(callback[, thisObject]) returns true if callback returns true for every item in the array.

~~~javascript
    let a1 = [1, 2, 3]
    // check if all items of array are numbers
    console.log(a1.every((item) => typeof item === 'number'))  // true
    let a2 = [1, '2', 3]
    // check if all items of array are numbers
    console.log(a2.every((item) => typeof item === 'number'))  // false
    let a3 = [2,4,6,8]
    // Check if all items of array are even
    console.log(a3.every((item) => item%2 === 0)) // true
    // Check if all items of array are Odd
    console.log(a3.every((item) => item%2 !== 0)) // false
~~~

- filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.

~~~javascript
    let a1 = [1, '2', 3,4,5,"Ramesh"]
    // filter all integer elements
    console.log(a1.filter((item) => typeof item === 'number'))  // [1, 3, 4, 5]
    // filter all non integer elements
    console.log(a1.filter((item) => typeof item !== 'number'))  // ['2', 'Ramesh']
    let a3 = [1,2,3,4,6,8]
    // filter all even numbers
    console.log(a3.filter((item) => item%2 === 0)) // [2, 4, 6, 8]
    // filter all odd numbers
    console.log(a3.filter((item) => item%2 !== 0)) // [1, 3]
~~~

[Watch Video Tutorials](https://play.google.com/store/apps/details?id=in.ttrc.pgdca)

## References
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
