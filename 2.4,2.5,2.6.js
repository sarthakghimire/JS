//Variables
let a=5; /** Variables' name should be relevant and has some rules (almost similar to C ie case sensitivity,repitition and so on) */
var b=5; /*var is not used much in present */
const pi=3.14;

console.log(a);
console.log(b);
console.log(pi);

/*Constant cannot be changed*/
a="Ram"; /**Value of a variable is changeable, like replacing a glass of water with new water */
b=3.44;
//*pi=1.23; This will throw error*/

console.log(a);
console.log(b);
console.log(pi);


//Data Types
let da=7;
let db=7.2;
let dc="Rame";
let dd=false;
let de="true";
let df;
let dg=null;
console.log(typeof(da));
console.log(typeof(db));
console.log(typeof(dc));
console.log(typeof(dd));
console.log(typeof(de));
console.log(typeof(df));
console.log(typeof(dg));


//Interactions: alert, prompt, confirm
//alert=2.2.html

//prompt
let n= prompt("Enter your age"); //though this is not compatible in node.js 
console.log("You are "+ n + " years old");
