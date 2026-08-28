console.log("hello world")

///////      VARIABLES     /////////////

/* Types of Variables 

1. var
2. let
3. const

*/

/* ----Var variables -----
 - Var can be re- declared and can bre re assinged 
 - it has Functional scope scross the module
 - Can be declared without installization
 - it can be accessible outside the block scope

 */

var a = 100
console.log("value of a :", a)

// var is type of variable 
// a is variable name 
// 10 is value assigned to the variable




// Re-assigneing the value of variable

a = 100
console.log("Re-assigning the value of a:", a)



// Re-declaring the the value of variable

var a = 300
console.log("Re-declaring the value of a:", a)


// Declaring variable without assignment

var b
console.log("value of b:", b) //  undefined


// Can installize later the value

b = 400
console.log("value of b:", b)


/* ------ let Variable-------

- let can be re-assigned by can't be re-declared
- it has a block scope variable -- we can't access variable outside the block scope
- its not so diversed as var variable
- cant be re-declared even inside the variable 

*/

let x = 100
console.log("value of x:", x)




// Re-assigning value of let variable

x = 200
console.log(" Re-assigned the value of x:", x)



// Re-declaring the value of let variable 

/* let x = 500
console.log("Re-declaring the value ogf x:", x) // SyntaxError: Identifier 'x' has already been declared

*/




// let variable in scope

if (true){
    var p =200
    let m =400
    console.log("value of var p inside scope: ", p)
    console.log('value of var m inside scope: ', m)
}

console.log("value of var p outside scope: ", p)

//console.log('value of var m outside scope: ', m) // m is not defined , because let variable can't be overwritten outside the scope with is already given





// let variable can't be re-outside the block scope

/* let m = 600
console.log("trying to re-declare let variable m:", m) // we get a error- Cannot access 'm' before initialization

*/




/* ------ Const Variable -------

- let can'T be re-assigned 
- can't be re-declared
- Const has to initialization while declaring the variable
- it has a block scope variable -- we can't access variable outside the block scope
- its not so diversed as var variable
- cant be re-declared even inside the variable 

*/

const g = 100
console.log("value of g;", g)




// Re-assgning the const variable
/*
g = 200
console.log("Re-assgning value of g;", g) // we get a error 'cant re-assigned' Assignment to constant variable-
*/




// Re-declared the const variable
/*
const g = 500
console.log(" Re-declared value of g;", g) // we get a error 'cant be re-declared' Identifier 'g' has already been declared
*/



// const variable in block scope

if(true){
    var t = 100
    let j = 500
    const u = 600

    console.log("value of var t inside the scope: ", t)
    console.log("value of let j inside the scope: ", j)
    console.log("value of const u inside the scope: ", u)

}

console.log("value of var t outside the scope: ", t)
//console.log("value of var t outside the scope: ", j) // let variable -j is not defined
//console.log("value of var t outside the scope: ", u) // const variable - u is not defined
    



