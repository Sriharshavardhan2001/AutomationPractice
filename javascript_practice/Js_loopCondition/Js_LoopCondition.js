/*
// loops are used to execute a block of code repeatedly until a
//  specified condition is met. The most common types of loops in 
// JavaScript are for loop, while loop, and do-while loop.


// 1. For Loop: The for loop is used when the number of iterations is known beforehand. 
// It consists of three parts: initialization, condition, and increment/decrement.
// 

syntax of for loop


//////  For loop /////

/* for loop is for if you have a specific iteration 
   example 20 , 30

----for(initialization; condition; increment/decrement){
    //code block to be executed

*/

// for loop ----increment br 1

for ( var i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("==================================")
// for loop ----increment br 


for( var h = 2; h<=40; h=h+2){
    console.log(h)
}


console.log("==================================")

console.log("Loop with string values")
// get array values with for of loop

var arr1 = [44, 77, 88, 99, 100, 199, 299]

for(var val of arr1){
    console.log(val)
}


console.log("==================================")
// get each character from string using for of loop

var g = "Bro hey, where are u going"

for(var yo of g){
    console.log(yo)
}


console.log("==================================")
// use if condition in for loop
// write a program to get all the number which are divisible by 3 and 5 from 1 to 50.

for (j = 1; j<=100; j++){
    if(j%3==0 && j%5==0){
        console.log(j)
    }
}


console.log("==================================")

// write a program to get factorial of given number
// 5 = 5*4*3*2*1

var fact = 1
var num = 10

for(var i=num; i>0 ; i--) {
    console.log(i,fact)
    
    fact *= i  // 1*5 = 5 | 5*4 = 20 | 20*3 = 60 | 60*2 = 120 | 120*1 = 120
    // fact = fact * i 
   


}
console.log("factorial of 10 :", fact)





console.log("==================================")

console.log("########### Nested for loop ##########")
// Nested for loop : In nested for loop for one single value of outer loop
// complete inner loop will execute.

// outer loop
for( h = 1; h<=6; h++){
    console.log("value of i:", h)

 // inner loop
    for(n = 1; n<=3; n++){
        console.log("value of n:", n)
    }
    console.log("------")
}




console.log("==================================")

// write a program to get factorial all values from 1 to 10

for(var num=1; num<=10; num++) {
    var fact = 1
    for (var i =num; i>0; i--) {
        fact = fact * i
    }
    console.log(`factorial of ${num} : ${fact}`)
}




console.log("==================================")

////////  While loop  /////////////

// while loop : when we want to execute code until certain condition.

var n1 = 1
while(n1<=10){
    console.log(n1)

    n1 +=1
}


/*  ===== infite loop =====
*/

var m1 = 0

while(true){
    console.log(m1)

    m1 +=1 // in the value will keeps on adding, because we kept the valu is true
           // if you what to break at certain point then there is syntax call 'BREAK
          
    if(m1 == 1020){

        break
    }       
}


////////////  Calculator in while loop   ////////////

function Calculator() {

    while(true) {


    var prompt = require ('prompt-sync')()

    console.log("Select your number as per operation.\n1. addition\n2. multiplication\n3. subtraction\n4. division")

    var op = Number(prompt( "Enter the operation:"))

    var num1 = Number(prompt("Enter the first number:"))

    var num2 = Number(prompt("Enter the second number:"))

    if(op === 1){
        console.log(" Addition the numbers :", num1+ num2)

    }else if (op === 2){
        console.log("Subtraction the numbers : ", num2-num2)

    }else if (op === 3){
        console.log("Multiply the numbers :", num1*num2)

    }else if (op === 4){
        console.log("Divide the numbers :" , num1/num2)

    }else if (op > 4){
        console.log("Invalid Operation")

        break

    
    }

}

}

Calculator()



console.log("######################################")
// Do - while - loop : do while loop executes the code atleast once
var k1 = 0
do{
    k1 += 1
    console.log(k1)

} while(k1> 10)

console.log("##################################")
// foreachloop : for each loop help us to execute the certain operation on arrays of values.
var arr1 = [5, 6, 7, 8, 2]
arr1.forEach(a => console.log(a**2))

var arr2 = ["Apple", "Mango", "Banana", "watermelon"]
arr2.forEach((a, b) => {
    console.log(a, b)
})

function cube(n) {
    console.log(n**3)
}

arr1.forEach(n => cube(n))