function sum(num1, num2) {
    "use strict"  //It prevent overtide the values - using this it always use values from num(10,20)
    
    num1 = 100;
    num2= 200;
    console.log (arguments[0] + arguments[1]);
    
}

// funciton call
sum(10, 20)