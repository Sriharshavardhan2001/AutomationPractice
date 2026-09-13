
//////     FUNCTIONS IN JAVASCRIPT     //////

/*
- Functions are block of code which can be re-used with doffrent values
- Function helps to reduce the code redundancy
- Functions can be called across the modules or across files
*/


// in below example
// function : keyword to create the function
// greeting : function name
// msg : parameter to the function, whose value will pass, where ever we call the function.

// function has call outside of the function body-------> this is imp


export function greeting(msg){
    console.log(msg)
}
greeting ("Good Morning") // msg = Good Morning // pass by value ------> this has limitaion, one at a time

var x = "good evening" // msg = x // pass by reference -------> doesn't have anty limitation
var y = ("how are you")

greeting(x)
greeting(y)



/*

for(var i = 1; i<=10; i++){
    var temp = " "

    for(var j = 1; j<=i; j++){
        temp = temp + " " + j
    }
  }


for(var x = 10; x>=1; x--){
    var temp2 = " "

    for (var y = 1 ; y<=x; y++){
        temp2 = temp2 + " " + y

    }

    console.log(temp)
    
    console.log(temp2)


}
*/
    



/////   Pyramid pattern  ////////

/*


*/


function PyramidPattern(ptrn=" ") {
    for (var i=1; i<=5; i++) {
        var temp = ""
        for(var j=1; j<=9; j++) {
            if(i == 1) {
                if(j == 5) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }
            } else if (i==2) {
                if(j > 3 && j<7 ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }

            } else if (i==3) {
                if(j > 2 && j<8 ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }

            } 

            else if (i==4) {
                if(j > 1 && j<9 ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }

            } 
            
            else {
                 temp = temp +" "+ "*"
            }
        }
        console.log(temp)
    }

}

PyramidPattern()





// rhombus pattern /////////


function rhombuspattern(ptrn = " "){

for (var i = 1; i<=5; i++){
    var temp = " "

    for (var j = 1; j<=9; j++){

        if(i == 1){
            if (j == 5){
                temp = temp + " " + "@"
            }else (
                temp = temp + " " + ptrn
            )
        } else if ( i == 2) {
            if (j > 3 &&  j< 7) {
                temp = temp + " " + "@"
            }else (
                temp = temp + " " + ptrn
            )
            } else if ( i == 3) {
            if (j > 2 &&  j< 8) {
                temp = temp + " " + "@"
            }else (
                temp = temp + " " + ptrn
            )
            
           }else if ( i == 4) {
            if (j > 3 &&  j< 7) {
                temp = temp + " " + "@"
            }else (
                temp = temp + " " + ptrn
            )  
        
           }else if ( i == 5) {
            if (j > 4 && j < 6 ) {
                temp = temp + " " + "@"
            }else (
                temp = temp + " " + ptrn
            )
           }
           else (
            temp = temp + " " + j
           )   

        }
        console.log(temp)
    }


}


rhombuspattern()




console.log("##########################################################")

function ImprovedPyramidPattern(ptrn=" ") {
    var a = 7
    var b = 9
    for (var i=1; i<=8; i++) {
        var temp = ""
        for(var j=1; j<=15; j++) {
                if(j > a && j<b ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }
            }
        console.log(temp)
        a = a-1
        b = b+1
    }

}

ImprovedPyramidPattern()



console.log("##########################################################")


function ImprovedPyramidPatternV2(ptrn=" ", Pyramidsize=9) {
    //console.log(Pyramidsize)
    var x = Pyramidsize/2 + 0.5
    var a = x-1
    var b = x+1
    //console.log(x, a, b)
    for (var i=1; i<=x; i++) {
        var temp = ""
        for(var j=1; j<=Pyramidsize; j++) {
                if(j > a && j<b ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }
            }
        console.log(temp)
        a = a-1
        b = b+1
    }
    

}

ImprovedPyramidPatternV2(" ", 19)




console.log("##########################################################")



function DiamondPattern(ptrn=" ", Pyramidsize=9) {
    //console.log(Pyramidsize)
    var x = Pyramidsize/2 + .5
    var a = x-1
    var b = x+1
    //console.log(x, a, b)
    for (var i=1; i<=x; i++) {
        var temp = ""
        for(var j=1; j<=Pyramidsize; j++) {
                if(j > a && j<b ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }
            }
        console.log(temp)
        a = a-1
        b = b+1
    }

     for (var i=1; i<=x; i++) {
        a = a+1
        b = b-1
        var temp = ""
        for(var j=1; j<=Pyramidsize; j++) {
                if(j > a && j<b ) {
                    temp = temp +" "+ "*"
                } else {
                    temp = temp +" "+ ptrn
                }
            }
        console.log(temp)
        // a = a-1
        // b = b+1
    }

}


DiamondPattern(" ", 9)





console.log("##########################################################")

// practice
