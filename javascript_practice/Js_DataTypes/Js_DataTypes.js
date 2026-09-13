///////    DATA TYPES    //////////

/* Types oF DataTypes 

Premitive data types

- NUMBER
- STRING
- BOOLEAN
- NULL 
- UNDERFINED

Non premitive data types
- Object
- Array
- Fucntion


*/

// Premitive data types
//-- 1. NUMBER 
/*
- Number datatype is immutable in nature , it can only hold one value at a time, 
  it could be +ve , -ve, decimals , longvalues
*/

var a = 10
var b = 3.5
var c= 5675469954589069

console.log ("Value of a : ", a, ":", typeof a)

console.log ("Value of b : ", b, ":", typeof b)

console.log("Value of c : ", c, ":", typeof c)




//-- 1. STRING

/*
- String datatype is immutable in nature
- String can hold any value as part of string if it is declared in "" or in ''
- String data type follows indexing ---> that starts from zero
*/

var s1 = "Shiva"
var s2 = ''
var s3 = "h"

console.log("value of s1:", s1, ":", typeof s2)

console.log("value of s1:", s2, ":", typeof s2)

console.log("value of s1:", s3, ":", typeof s3)

/* -- we said that string data types also follows indexing

- example --->0 1 2 3 4 
              H E L L O 

*/

var s = "Hello"

console.log(s[2], typeof s)
console.log(s[4], typeof s)



//-- 3. BOOLEAN
/*
- BOOLEAN data type contains only 2 values.
- Boolean value are output any centains condition.
*/

var b1 = true
var b2 = false


console.log ("b1 :", b1, ":", typeof b1)
console.log ("b1 :", b2, ":", typeof b2)

console.log (5 === '5')
console.log (100 == 100)


//-- 4. NULL

/*null : Assign empty value to variable
*/

var c1 = null
console.log("c1", c1) // c1 null 




//-- 5. UNDEFINED
/* undefined when we declare variable and don't assign any value to the variable.
*/

var d1
var g1
console.log("d1:", d1) // undefined
console.log("g1 :", g1) // undefine





// Non premitive data types
// 1. Object: 

/*
- Object store value in key value pair in curly braces {a: 123}
- Object is mutable data type that we can modify any point of time.
- Object store on unique key, duplicate keys are not allowed.
- value could be duplicate.
*/

var Person = {name: "Rahul", age: 34, email: 'rahul@gmail.com', phone: 234567787, age: 46}
console.log(Person)

// { name: 'Rahul', age: 46, email: 'rahul@gmail.com', phone: 234567787 }
// get key data
console.log(Person['name']) // Rahul
console.log(Person.age) // 46

// Delete specific data from object
delete Person.phone
console.log("Updated object :", Person)
// Updated object : { name: 'Rahul', age: 46, email: 'rahul@gmail.com' }

//Add new key value pair
Person.address = "Pune, viman Nagar"
console.log("Updated object :", Person)
/*

Updated object : {
  name: 'Rahul',
  age: 46,
  email: 'rahul@gmail.com',
  address: 'Pune, viman Nagar'
}
*/

Person.phone = [879394508, 67868768763]
console.log(Person)
/*
{
  name: 'Rahul',
  age: 46,
  email: 'rahul@gmail.com',
  address: 'Pune, viman Nagar',
  phone: [ 879394508, 67868768763 ]
}

*/

console.log("#############################################")
// 2. Array
// Array is mutable data type, that can store any type of value.
// Array store values in square brancket.
// Array follows indexing as like string.

//          0  1    2        3          4                   5     6    7
var arr1 = [4, 5.6, "Hello", [5, 6, 7], {a: 1234, b: 456}, true, null, undefined]
console.log(arr1)

console.log("val of index 3 :", arr1[3])
// val of index 3 : [ 5, 6, 7 ]
console.log(arr1[3][1]) // 6

console.log("value of index 4 :", arr1[4])
// value of index 4 : { a: 1234, b: 456 }
console.log("value of index 4 :", arr1[4]['a']) // 1234

var arr2 = [[4, 5, 6], 
            [7, 8, 2],
            [5, 1, 3]]

console.log(arr2[2][2]) // 3

arr3 = [5, 6, 7]
arr3.push(55)
console.log("arr3 :", arr3) // arr3 : [ 5, 6, 7, 55 ]


console.log("#########################")
// 3. Function

// declare function
function  greeting(msg) {
    console.log(msg)
}

greeting("Good Morning")
greeting("Good Evening")
greeting("We are learning JavaScript")



