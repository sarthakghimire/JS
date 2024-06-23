//array declaration
let arr=[
    "Yamaha","Bajaj","Honda"  
  ];
  
  //printing in a table
  console.table(arr);
  
  document.write(arr[0]);
  
  //tostring function
  let myString=arr.toString();
  console.log(myString);
  
  //Stack Operation-Push
  arr.push("Hero");
  console.log(arr);
  
  //Stack Operation-Pop
  let poppedElement=arr.pop();
  console.log("Removed:"+poppedElement);
  console.log("New Array"+arr);