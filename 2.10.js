//Conditional Branching

//if..else
let age=18;
if(age>=18)
{
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}

//if...else if...else
let pic=28;
if(pic>28)
{
    console.log("Greater that pic");
}
else if(pic==28)
{
    console.log("Equal to pic");
}
else{
    console.log("Less than pic");
}

//Ternary Operator
(age>=18)? console.log("You can drive") : console.log("You can't drive");

//Boolean Comparison
let x=(age==18); //True, hence gives 1
if(x) //Equivalent to if(1) 
{
    console.log("You can drive");
}