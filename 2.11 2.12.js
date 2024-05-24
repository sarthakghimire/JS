//Logical Operators
//Logical AND operator (&&)
console.log("Truth table for AND\n");
console.log("A\tB\tA AND B");
for(let i=0;i<=1;i++)
{
    for(let j=0;j<=1;j++)
    {
        console.log(`${i}\t${j}\t${i&&j}`);
    }
}

//Logical OR operator (||)
console.log("Truth table for OR\n");
console.log("A\tB\tA OR B");
for(let i=0;i<=1;i++)
{
    for(let j=0;j<=1;j++)
    {
        console.log(`${i}\t${j}\t${i||j}`);
    }
}

//Logical NOT operator (!)
console.log("Truth table for NOT\n");
console.log("A \tNOT A");
for(let i=0;i<=1;i++)
{
    
        console.log(`${i}\t${!i}`);
    
}

//Nullish Operator (??)
// in a??b, if a is defined...return a, else return b
let box;
let xob;
console.log(box??"Ram"); //Returns Ram as box is undefined
console.log(box??xob); //Returns undefined (Value of xob) as box is undefined
console.log("Ram"??box); //Returns Ram, doesn't check undefined box
console.log("Ram"??"box"); //Returns Ram, doesn't check string box