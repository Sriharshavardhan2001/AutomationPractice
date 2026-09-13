// 1. implicit conversion

// Example 1 -> when we add string with number, implicit conversion happens and number
//  is converted to string

var output = "123" + 5
console.log("output :", output, typeof output)
// output : 1235 string


//Example2 : Number - string : it will convert into number and perform math operator
var output2 = 30 - "17"
console.log("Output2 :", output2) // Output2 : 13

var out4 = "40" - 20
console.log("output4 :", out4) // output4 : 20

// Example3 : Boolean to number
// default value true =1 and false = 0
var output3 = 10 + true
console.log("Output3 :", output3) // Output3 : 11


console.log("##############################")
// 2. explicit conversion

// -> convert string into Number
var s1 = "2345"
var n1 = Number(s1)
console.log(n1, n1*20, typeof n1) // 2345 2365
// 2345 46900 number

// -> Convert Number into string.
var n3 = 6785
var s3 = String(n3)
console.log("s3:", s3, typeof s3) // s3: 6785 string
console.log(s3 + 20) // 678520

console.log("division :", s3/5) // division : 1357