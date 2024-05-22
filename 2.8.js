//Basics of operators
//Binary Operators
console.log(2+7);  //Addition operator
console.log(2-7);  //Subtraction operator
console.log(2*7);  //Multiplication operator
console.log(2/7);  //Division operator (qoutient)
console.log(2%7);  //Modulo operator (remainder)
console.log(2**7); //Exponential operator

//Concatenation of strings using '+' operator
let a="World";
console.log("Hello "+"World"); //Hello World
console.log("Hello "+ a);  //Another way we can concatenate strings
console.log("1"+2+3); //Will give 123
console.log(1+2+"3"); //Will operate as (1+2) mathematically ie 3 concatenated with 3 ->33
console.log(1+"2"+3); //Will give 123 only

//Unary Operators
let a1=5;
console.log(+a1); //5 (Unary Plus will do nothing most of the time)
console.log(-a1); //-5 (Unary Minus will change value based on mathematical rule ie -*-=+,-*+=-....)
console.log(++a1); //6 (Will increase the value by 1)
console.log(--a1); //5 (Will decrease the value by 1)



