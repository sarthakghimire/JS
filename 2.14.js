//Switch case

let a=5;

function isEqual(a)
{
    if(a==5) 
    return 1;
  return 0;
}

switch(isEqual(a))
{
    case 1:
        console.log("True");
        break;

     case 2:
        console.log("False");
        break;
        
      default:  
      console.log("Error!");
}