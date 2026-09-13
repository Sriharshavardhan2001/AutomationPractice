// Function with defult parameters


export function addition(num1, num2=40){
    console.log("value of num1:", num1)
    console.log("value of num2:", num2)
    console.log("Addition value:", num1*num2)
}

addition(60)

///// lets overwright the values

addition(70, 60)


////// 

function multiplication (num_1 = 20, num_2){ /// num_1 is a parameter so no need of var, let etc. the value can ne mention directly
    console.log("value of num_1:", num_1)
    console.log("value of num_2:", num_2)
    console.log("Multiplication value:", num_1*num_2)
}

multiplication(4)          /* -------> the value in this will be directly applied to the num_1 because it is in sequence
                           value of num_1: 4
                           value of num_2: undefined
                           Multiplication value: NaN */





console.log("-------------------------------------------")       

function getfactorial(num){
    var fact = 2
    for(var i = num; i>=1; i-- ){
        fact = fact * i
    }

    return fact
}

var result= getfactorial(8)
console.log("factorial valu 0f 8 :", result)


console.log("-------------------------------------------")    


function mathoperation(n1,n2,n3){
    var add = n1 + n2 
    var subraction = n2-n1
    var multi =n3*n1
    var division = n2/n3
    return [add, subraction, multi, division]
}

var output= mathoperation(10, 13, 16, 12)

var a = output[0]
var b = output[1]
var c = output[2]
var d = output[3]

console.log("value:", a,b,c,d)



console.log("-------------------ARROW FUNCTION-----------------------")    

////////       ARROW FUNCTION      //////////

/* - Arrow function id denoted as " =>". */

var x = (n) => {
    return n**2
}

console.log(x(8))



console.log("-------------------ARROW FUNCTION-----------------------")   

var evennum = (Arr) =>{
    var sqr= []
    for(var val of Arr){
        if(val%2==0){
            sqr.push(val**2)
        }else("no even value"

        )
    }

    return sqr
}

var output2 = evennum([5, 6, 8, 2, 3, 5, 6, 12])

console.log(output2)




console.log("------------------- CALL BACK FUNCTION-----------------------")   

// call back function : when one function call another function as parameter, then it's called callback function.

function MainFunction(n, func) {
    func(n)
}

function cube(a){
    console.log("cube of:", a**3)
}

MainFunction(5, cube)






