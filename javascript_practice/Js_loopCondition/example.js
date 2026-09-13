
function Calculator() {
    while(true) {
        var prompt = require('prompt-sync')()
        console.log("Select your number as per operation.\n1. addition\n2. multiplication\n3. subtraction\n4. division")
        var op = Number(prompt("Enter your operation:"))
        var num1 = Number(prompt("Enter first value:"))
        var num2 = Number(prompt("Enter second value:"))
        if (op ==1) {
            console.log("Addition :", num1+num2)
        } else if (op == 2) {
            console.log("multiplication :", num1*num2)
        }else if (op == 3) {
            console.log("subtraction :", num1-num2)
        }else if (op == 4) {
            console.log("division :", num1/num2)
        }
        else if (op > 4) {
            console.log("Invalid operation")
            
        }
        console.log("--------------------")
    }
}
