

// Question 1: E-Commerce Shopping Bill

var lap= 25000
var mouse= 750
var key= 1500
console.log("Total number of products :", Number((lap*1)+(mouse*2)+(key*1)))


/*ar lap= 25000
var mouse= 750
var key= 1500

var total= Number((lap*1)+(mouse*2)+(key*1))

console.log("Price of total products :", total)

*/


// Question  2: Restaurant Bill Split

var Totalbill = 3850
var split = Totalbill/3

console.log("Each person should pay :", split)


// Question 3: Employee Net Salary

Basic_Salary = 40000
HRA = 8000
Bonus = 5000
Tax = 4500

var gross_salary = Basic_Salary +  HRA + Bonus + Tax
var net_salary = Basic_Salary +  HRA + Bonus

console.log("Gross salary : ", gross_salary)
console.log("Net salary : ", net_salary)


// Question  4: Simple Interest c
/*
Principal = ₹100,000
Rate = 8%
Time = 3 years
*/

Principal = 100000
Rate = 8
Time = 3 

var SI = (Principal*Rate*Time)/100

console.log("Simple interest :", SI)

total_amount = SI + Principal

console.log("Total amount: ", total_amount)


/// Question 5: Compound Interest

/* Principal = ₹50,000
Rate = 10%
Time = 2 years
*/

Principal = 50000
rate = 10
time = 2

Amount = (Principal*(1+rate/100)**time)
CI = Amount-Principal

console.log("value of CI:", CI)


/// Question 6: Celsius to Fahrenheit

Celsius = 35

Fahrenheit = (Celsius * 9 / 5) + 32

console.log("value of Celsius:", Fahrenheit)


/// Question 7: BMI Calculator

weight = 72
Height = 1.75

BMI = weight/ Height**2

console.log("value of BMI:", BMI)


/// Question 8: Rectangle Area and Perimeter

Length = 15
Width = 8

var area = Length*Width
var perimeter = 2 * (Length+Width)

console.log("value of area:", area)
console.log("value of perimeter:", perimeter)











