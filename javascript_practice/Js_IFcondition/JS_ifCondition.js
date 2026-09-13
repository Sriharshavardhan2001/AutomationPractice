
///     IF Condition in JavaScript     //////

/*
if(condition) {
  code block
} else  {
  code block     
}

*/

// write a proram to compare values
var a = 10
var b = 11

if(a == b ) {
    console.log("a value and b is equal:", a, b)

}else{
    console.log("a and b value is not equal:", a, b)


}



console.log("#################################")
// write a program to check given number is even or odd

var s = 200

if(g = s%2 == 0){
    console.log("s value is even number:", g)

}else{
    console.lof("s value is odd number", g)
    
}


console.log("#################################")
// write a program to check given number is divisible by 3 and 5

var i = 300

if(i%3==0 && i%5==0){
    console.log("Number is divisible by 3 and 5 ",i)

}else{
    console.log(" Number is not divisible by 3 and 5 ", i)

}


console.log("------------------")
// write a program to check given number is divisible by 7 or 5


var y = 300

if(y%7==0 || y%5==0){
    console.log("Number is divisible by 7 and 5 ",y)

}else{
    console.log(" Number is not divisible by 7 and 5 ",y)

}



console.log("################################")
// if else if condition
/*
if(cond1) {
    code block
} else if (cond2) {
    code block
} else if (cond3) {
    code block
} else {
    code block    
}
*/

// write a program to check biggest number among three values

var a1= 500
var a2= 300
var a3= 500

if(a1 > a2 && a1 > a3){
    console.log("a1 is the largest value", a1)

}else if (a2 > a1 && a2 > a3){
    console.log("a2 is the largest value", a2)
}else if(a3 > a1 && a3 > a2){
    console.log("a3 is the largest value", a3)

}else{
    console.log("no value is largest")
}




console.log("################################")
/*
// Nested of condition syntax
if (cond1) {
   code block
    if (cond2) {
        code block
        if (cond3) {
             code block
        } else {
             code block
        }
    } else {
        code block
    }
} else {
   code block    
}

*/

// write a pogram to check the result of interview using nested if condition.

var round1 = "pass"
var round2 = "fail"
var round3 = "pass"

if(round1=="pass"){
    console.log("Passes the round 1 and moved to round 2", round1)
    if(round2 == "pass"){
        console.log("Passes the round 2 and moved to round 3", round2)
        if(round3 == "pass"){
            console.log("Passes the round 3 got the job", round3)


        }else{
            console.log("Sorry failed in last round")
        }
    }else{
        console.log("Sorry failed in 2nd roun round") 
    }
}else{
    console.log("Sorry failed in 1st round")
}



