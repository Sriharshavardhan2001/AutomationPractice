
// install package to read input from user.
// -> npm install prompt-sync


const prompt = require('prompt-sync')();

const username = prompt("Enter your username:")

console.log(`Hello : ${username}`)





// Calculator 

function Calculator() {



    var prompt = require ('prompt-sync')()

    var op = Number(prompt( "Enter the operation:"))

    var num1 = Number(prompt("Enter the first number:"))

    var num2 = Number(prompt("Enter the second number:"))

    if(op == 1){
        console.log(" Addition the numbers :", num1+ num2)

    }else if (op == 2){
        console.log("Subtraction the numbers : ", num2-num2)

    }else if (op == 3){
        console.log("Multiply the numbers :", num1*num2)

    }else if (op == 4){
        console.log("Divide the numbers :" , num1/num2)

    }else if (op>4){
        console.log("Invalid Operation")

    
    }

    
}

Calculator()


