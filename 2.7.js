//Type conversion. CAC video 6,7
let a="123"; //String
let b=456;   //Number
let c=true;  //Boolean 'true or false' 
let d;       //variables without a value become undefined
let e="lorem"; //String again
let f="123a";

console.log("Before conversion:");
console.log(typeof(a)+" "+ a);
console.log(typeof(b)+" "+ b);
console.log(typeof(c)+" "+ c);
console.log(typeof(d)+" "+ d);
console.log(typeof(e)+" "+ e);
console.log(typeof(e)+" "+ f);
console.log("\n");

let aa=Number(a);
let bb=String(b);
let cc=String(c);
let ee=Boolean(e);
let ff=Boolean(f);
let gg=Number(f);
d=true;
console.log("After conversion:");
console.log(typeof(aa)+" "+ aa);
console.log(typeof(bb)+" "+ bb);
console.log(typeof(cc)+" "+ cc);
console.log(typeof(d)+" "+ d);
console.log(typeof(ee)+" "+ee);
console.log(typeof(ff)+" "+ff);
console.log(typeof(gg)+" "+gg); //Since f has a non number 'a', f can't be converted to a number

//More type conversions
console.log("6"/3);
console.log(typeof("6"/3));
console.log("6"/"3");
console.log(typeof("6"/"3"));
console.log(6/"3");
console.log(typeof(6/"3"));

console.log("7"/"0");
console.log(Boolean("7"/"0")); 
