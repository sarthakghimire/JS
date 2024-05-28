let a=4.5;
let b=3;
let c= a + b * 2;
console.log(c);
let i;
let j;

//concatenation
let d="Hello";
console.log(d+" World");

//Quote inside quote
console.log("This is how you do \"Double Quotes\"");
console.log("This is how you do \\n");
console.log(d.length);
console.log(d[0]);
console.log(d[d.length-1]);

//Simple Function
function f1(noun,adjective,verb,adverb)
{
    let result="";
    result+= "The " + adjective+" "+noun+" "+verb+" "+adverb;
    return result;
}

console.log(f1("cat","striped","ate","slowly"));
console.log(f1("man","tall","did homework","nicely"));

//Array declaration. 
let a1=["Ram",2,9.8];
console.log(a1[1]);

const a2=[
    [11,12,13],
    [21,22,23],
    [31,32,33]
    ];
console.log(a2[1][2]);  
for(i=0;i<=2;i++){
    for(j=0;j<=2;j++){
        console.log(a2[i][j]);
    }
}

//Push Pop operations
a1.push(35);
console.log(a1[a1.length-1]);

console.log(a1);
let abc=a1.pop();
console.log("Popped " + abc);
console.log(a1);

function mathematic(a,b)
{
    console.log("Sum="+(a+b));
    console.log("Diff="+(a-b));
    console.log("Prod="+(a*b));
    console.log("Quotient="+(a/b));
    console.log("Remainder="+(a%b));
}
mathematic(12,5);

//Function to check prime number
function isPrime(a)
{
    let count=0;
    for( i=2;i<a;i++){
        if(a%i==0)
        count++;
    }
    if(count==0){
    return true;
    }
    return false;
}

console.log(isPrime(7));
console.log(isPrime(4));

/*let number=prompt("Enter a number:");
console.log(isPrime(number));*/

//Creating Object
var obj1={
    "name":"Sarthak",
    "age":21,
    "home":"Jhapa"
};

console.log("Name="+(obj1.name)+"\n"+"Age="+(obj1.age)+"\n"+"Address="+(obj1.home));

//Modifying Object
obj1.home="Lokanthali";
console.log("\nModified Data:\n");
console.log("Name="+(obj1["name"])+"\n"+"Age="+(obj1["age"])+"\n"+"Address="+(obj1["home"]));

//Adding New Properties
obj1.college="SXC Maitighar";
console.log("\nSecond Modified Data:\n");
console.log("Name="+(obj1["name"])+"\n"+"Age="+(obj1["age"])+"\n"+"Address="+(obj1["home"])+"\n"+"College="+(obj1["college"]));
