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
~~~javascript
    const a = new Array(1,12,3,4,5);
    a[1.3] = 18;
    a[9.2] = 17;
    console.log("Iterating using for loop");
    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }
~~~

~~~
1 
12
3
4
5
~~~

~~~javascript
    console.log("Iterating using forEach");
    a.forEach((item) => console.log(item));
~~~

~~~
1 
12
3
4
5
~~~

~~~javascript
    console.log("Iterating using map function");
    a.map(item => console.log(item));
~~~

~~~
1 
12
3
4
5
~~~

All above examples provide same output. Using for loop we have more control over the elements as we are able to access their index number. Using forEach also we can assess the index number. Let us have a look at the below example.

~~~javascript
    console.log("Iterating using forEach");
    a.forEach((item,index) => console.log(index, item));
~~~

~~~
0  1 
1  12
2  3
3  4
4  5
~~~

[Watch Video Tutorials](https://play.google.com/store/apps/details?id=in.ttrc.pgdca)

## References
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
